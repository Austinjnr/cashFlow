class AccountsController < ApplicationController
  before_action :set_account, only: %i[update destroy]

  # GET /users/:user_id/accounts
  def index
    user = User.find_by(id: params[:user_id])
    if user.nil?
      render json: { error: "User not found. Please create an account." }, status: :not_found
      return
    end

    @accounts = user.accounts
    if @accounts.present?
      session[:account_sid] = @accounts.first.id
      render json: @accounts.as_json(include: [:beneficiaries, :wallet, :transactions]), status: :ok
    else
      render json: { error: "You do not have any accounts. Please create an account." }, status: :no_content
    end
  end

  # GET accounts
  def account
    @account = Account.all
    render json: @account
  end

  # GET /accounts/:id
  def show
    @account = Account.find(params[:id])
    render json: {
      account: @account.as_json(include: [:beneficiaries, :wallet, :transactions]),
    }
  end

  # POST /users/:user_id/accounts
  def create
    user = User.find(params[:user_id])
    account_number = params[:id].to_s + rand(1000000..9999999).to_s
    @account = user.accounts.create(account_params.merge(account_number: account_number))
    @wallet = @account.create_wallet(balance: 0, account_number: account_number)
    session[:current_account_id] = @account.id
    session[:account_sid] = @account.id
    if @account.valid? && @wallet.valid?
      render json: { session: session[:account_sid] }, status: :ok
    else
      render json: { errors: @account.errors.merge(@wallet.errors) }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /accounts/:id
  def update
    if @account.update(account_params)
      render json: @account, status: :ok
    else
      render json: { error: @account.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  end

  # DELETE /accounts/:id
  def destroy
    @account.destroy
    head :no_content
  end

  private

  def set_account
    @account = Account.find_by(id: params[:id])
    if @account.nil?
      render json: { error: "Account not found." }, status: :not_found
    end
  end
  
  def account_params
    params.permit(:phone_number, :avatar_url, :id_number, :name).merge(user_id: params[:user_id])
  end
  

  def create_wallet(params)
    @wallet = @account.build_wallet(params)
  end
end
