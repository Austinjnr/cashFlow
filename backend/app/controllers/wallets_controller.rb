class WalletsController < ApplicationController
  before_action :authenticate_user!
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
    elsif current_account.balance + amount > 10000
      render json: { error: 'The wallet balance limit is $10,000. Please top up a smaller amount.' }
    else
      current_account.wallet.top_up(amount)
      render json: { message: 'Wallet was successfully topped up.' }
    end
  end
  
  def send_money
    recipient_account = Account.find_by(id: params[:recipient_account_id])
    amount = params[:amount].to_f
    if recipient_account.nil?
      render json: { error: 'Recipient account not found.' }
    elsif amount <= 0
      render json: { error: 'Please enter a valid amount to send.' }
    elsif amount > current_account.balance
      render json: { error: 'Insufficient balance.' }
    else
      current_account.wallet.transfer(amount, recipient_account)
      render json: { message: 'Money sent successfully.' }
    end
  end
  
  private
  
  def set_wallet
    @wallet = Account.find_by(id: session[:current_account_id]).wallet
  end
  

  def wallet_params
    params.require(:wallet).permit(:account_id, :balance)
  end
end
