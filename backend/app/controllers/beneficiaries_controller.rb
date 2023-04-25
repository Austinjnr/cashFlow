class BeneficiariesController < ApplicationController
  before_action :set_beneficiary, only: %i[ show update destroy ]

  # GET /beneficiaries
  def index
    @beneficiaries = Beneficiary.all

    render json: @beneficiaries, statu: :ok
  end

  # GET /beneficiaries/1
  def show
    render json: @beneficiary, status: :ok
  end

  # POST /beneficiaries
  def create
    @beneficiary = Beneficiary.create!(beneficiary_params)

    render json: @beneficiary, status: :created, location: @beneficiary
  end

  # PATCH/PUT /beneficiaries/1
  
  # # DELETE /beneficiaries/1
  # def destroy
  #   @beneficiary.destroy
  # end

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
