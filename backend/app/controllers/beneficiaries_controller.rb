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
    @beneficiary = @account.beneficiaries.new(beneficiary_params)
    if @beneficiary.save
      render json: @beneficiary, status: :created
    else
      render json: @beneficiary.errors, status: :unprocessable_entity
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
    params.require(:beneficiary).permit(:name, :email, :phone_number)
  end
end