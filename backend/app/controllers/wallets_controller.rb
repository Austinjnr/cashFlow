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

  # Creating a Functionality for Sending Money

  def send_money
    set_wallet
    amount = params[:amount].to_i
    beneficiary_id = params[:beneficiary_id]
  
    beneficiary = current_account.beneficiaries.find_by(id: beneficiary_id)
    if beneficiary.nil?
      render json: { success: false, error: "Beneficiary not found" }
      return
    end
  
    if amount <= 0
      render json: { success: false, error: "Invalid amount" }
      return
    end
  
    if @wallet.balance < amount
      render json: { success: false, error: "Insufficient balance" }
      return
    end
  
    transaction_fee = 0
    if amount >= 10000
      transaction_fee = amount * 0.1
    elsif amount >= 1000
      transaction_fee = amount * 0.05
    elsif amount >= 200
      transaction_fee = amount * 0.01
    end
  
    total_amount = amount + transaction_fee
  
    if @wallet.balance < total_amount
      render json: { success: false, error: "Insufficient balance to cover transaction fee" }
      return
    end
  
    transaction = Transaction.create!(
      account_id: current_account.id,
      transaction_type: "Send Money",
      transaction_fee: transaction_fee,
      amount: amount,
      beneficiary_id: beneficiary.id
    )
  
    @wallet.balance -= total_amount
    @wallet.last_transaction = "Send Money"
    if @wallet.save 
      render json: { success: true, message: "You have successfully sent #{amount} to #{beneficiary.name}. Transaction fee is #{transaction_fee}." }
    else
      render json: { success: false, error: "Failed to process transaction" }
    end
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
