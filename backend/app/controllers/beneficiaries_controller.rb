class BeneficiariesController < ApplicationController
  before_action :set_beneficiary, only: %i[ show update destroy ]

  # GET /beneficiaries
  def index
    @beneficiaries = Beneficiary.all

    render json: @beneficiaries
  end

  # display all beneficiaries for a given account_id
  def index
    @account = Account.find(params[:account_id])
    @beneficiaries = Beneficiary.all_beneficiaries(@account.id)
  end

  # add a beneficiary for a given account_id
  def create
    @account = Account.find(params[:account_id])
    beneficiary = Beneficiary.add_beneficiary(@account.id, params[:name], params[:phone_number], params[:email])
    render json: beneficiary
  end

  # GET /beneficiaries/1
  def show
    render json: @beneficiary
  end

  # POST /beneficiaries
  def create
    @beneficiary = Beneficiary.new(beneficiary_params)

    if @beneficiary.save
      render json: @beneficiary, status: :created, location: @beneficiary
    else
      render json: @beneficiary.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /beneficiaries/1
  def update
    if @beneficiary.update(beneficiary_params)
      render json: @beneficiary
    else
      render json: @beneficiary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /beneficiaries/1
  def destroy
    @beneficiary.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_beneficiary
      @beneficiary = Beneficiary.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def beneficiary_params
      params.require(:beneficiary).permit(:name, :email, :phone_number)
    end
end
