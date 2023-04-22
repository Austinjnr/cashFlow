class AccountsController < ApplicationController
  before_action :set_account, only: %i[ show update destroy ]

  # GET /accounts
  def index
    @accounts = Account.all
    render json: @accounts
  end

  # GET /accounts/1
  def show
    render json: {
      account: @account.as_json(include: [:beneficiaries, :wallets, :transactions])
    }
  end


# POST /accounts
def create
  user = User.find(params[:user_id])
  @account = user.accounts.create(account_params)
  if @account.valid?
    render json: @account, status: :created, location: @account
  else
    render json: @account.errors, status: :unprocessable_entity
  end
end


  # PATCH/PUT /accounts/1
  def update
    if @account.update(account_params)
      render json: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # DELETE /accounts/1
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