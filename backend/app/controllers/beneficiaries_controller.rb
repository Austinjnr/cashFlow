class BeneficiariesController < ApplicationController
  before_action :set_account, only: [:create]
  before_action :set_beneficiary, only: [:show, :update, :destroy]

  # GET /beneficiaries
  def index
    @beneficiaries = Beneficiary.all
    render json: @beneficiaries, status: :ok
  end

  # GET /beneficiaries/1
  def show
    render json: @beneficiary, status: :ok
  end

  # POST /accounts/:account_id/beneficiaries
  def create
    account = Account.find_by(account_number: params[:account_number])
    @beneficiary = account.beneficiaries.new(beneficiary_params)
    if account.present?
      if @beneficiary.save
        render json: @beneficiary, status: :created
      else
        render json: @beneficiary.errors, status: :unprocessable_entity
      end
    else
      render json: { message: "Dear Customer, the Beneficiary Account number you entered was not found. Kindly confirm it again. Thank you for choosing CashFlow." }
    end
  end

  # PATCH/PUT /beneficiaries/1
  def update
    if @beneficiary.update(beneficiary_params)
      render json: @beneficiary, status: :ok
    else
      render json: @beneficiary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /beneficiaries/1
  def destroy
    @beneficiary.destroy
  end

  private

  def set_account
    @account = Account.find(params[:account_id])
  end

  def set_beneficiary
    @beneficiary = Beneficiary.find(params[:id])
  end

  def beneficiary_params
    params.require(:beneficiary).permit(:name, :email, :phone_number, :account_number)
  end
end
