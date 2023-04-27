class WalletsController < ApplicationController
  before_action :set_account
  before_action :set_wallet, only: [:show, :top_up, :send_money]

  def new
    @wallet = Wallet.new
  end

  def create
    @wallet = Wallet.new(wallet_params)
    if @wallet.save
      redirect_to @wallet, notice: 'Wallet was successfully created.'
    else
      render :new
    end
  end

  def show
  end
  def top_up
    amount = params[:amount].to_f
    if amount <= 0
      render json: { error: 'Please enter a valid amount to top up.' }
    elsif @wallet.nil?
      render json: { error: 'Wallet not found.' }
    elsif @wallet.balance + amount > 10000
      render json: { error: 'The wallet balance limit is $10,000. Please top up a smaller amount.' }
    else
      @wallet.top_up(amount)
      render json: { message: 'Wallet was successfully topped up.' }
    end
  end

  def send_money
    recipient_account = Account.find_by(id: params[:account_id])
    amount = params[:amount].to_f
    if recipient_account.nil?
      render json: { error: 'Recipient account not found.' }
    elsif amount <= 0
      render json: { error: 'Please enter a valid amount to send.' }
    elsif amount > @wallet.balance
      render json: { error: 'Insufficient balance.' }
    else
      @wallet.transfer(amount, recipient_account)
      render json: { message: 'Money sent successfully.' }
    end
  end

  private

  def set_account
    @account = Account.find_by(id: session[:account_id])
  end
  

  def set_wallet
    @wallet = @account&.wallet&.first || Wallet.new(account: @account)
  end

  def wallet_params
    params.require(:wallet).permit(:account_id, :balance)
  end
end
