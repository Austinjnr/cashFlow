class AccountsController < ApplicationController
  before_action :set_account, only: %i[ show update destroy ]

  # GET /users/:user_id/accounts
  def index
    user = User.find_by(id: params[:user_id])
    if user.nil?
      render json: {error: "User not found. Please create an account." }, status: 404
      return
    end
    
    @accounts = user.accounts
  
    if @accounts.present?
      render json: @accounts
    else
      render json: {error: "You do not have any accounts. Please create an account." }, status: 201
    end
  end
   
  # GET /accounts
  def user_account
    @accounts = Account.all
    render json: @accounts
  end

  # GET /users/:user_id/accounts/:id
  def show
    render json: {
      account: @account.as_json(include: [:beneficiaries, :wallet, :transactions])
    }
  end

  # POST /users/:user_id/accounts
  def create
    user = User.find(params[:user_id])
    @account = user.accounts.create(account_params)
    @wallet = @account.create_wallet(balance: 0)
    session[:current_account_id] = @account.id
    session[:account_sid] = @account.id
    if @account.valid? && @wallet.valid?
      render json: { sessionAccount: session[:account_sid]}, status: :ok
    else
      render json: { errors: @account.errors.merge(@wallet.errors) }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/:user_id/accounts/:id
  def update
    if @account.update(account_params)
      render json: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/:user_id/accounts/:id
  def destroy
    @account.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def account_params
      params.require(:account).permit(:phone_number, :avatar_url, :id_number, :account_number).merge(user_id: params[:user_id])
    end
end
