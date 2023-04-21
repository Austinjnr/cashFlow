class WalletsController < ApplicationController
  before_action :set_wallet, only: [:show, :edit, :update, :destroy, :top_up]

  # GET /wallets
  def index
    @wallets = Wallet.all

    render json: @wallets, status: :ok
  end

  # GET /wallets/1
  def show
    render json: @wallet, status: :ok
  end

  # POST /wallets
  def create
    @wallet = Wallet.new(wallet_params)

    if @wallet.save
      render json: @wallet, status: :created, location: @wallet
    else
      render json: @wallet.errors, status: :unprocessable_entity
    end
  end

  # Top Up functionality 

  def top_up
    amount = params[:amount].to_i

    if amount <= 0
      render json: { success: false, error: "Invalid amount" }
      return
    end

    transaction = create_top_up_transaction(amount)
    if transaction.persisted?
      update_wallet_balance(amount)
      render json: { success: true, message: "Your account has been topped up by #{amount}." }
      return
    else
      render json: { success: false, error: "Failed to process top-up request." }
      return
    end

    render :new
  end

  private

    def set_wallet
      @wallet = Wallet.find(params[:id])
    end

    # creating a transaction to top up

    def create_top_up_transaction(amount)
      Transaction.create(
        account_id: current_account.id,
        transaction_type: "Top-Up",
        transaction_fee: 0,
        amount: amount,
      
      )
    end

    # updating the balance in the wallet when topping up 

    def update_wallet_balance(amount)
      @wallet.balance += amount
      @wallet.last_transaction = "Top-Up"
      @wallet.save!
    end

    #setting current account to coorespond to a specific wallet :id
    def current_account
      @current_account ||= Account.find_by(id: @wallet.account_id)
    end

    # Only allow a list of trusted parameters through.
    def wallet_params
      params.require(:wallet).permit(:balance, :last_transaction)
    end

end
