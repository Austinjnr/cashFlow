class AgentsController < ApplicationController
  def create
    agent_number = generate_agent_number
    account = Account.find_by(id: params[:account_id])

    if account.nil?
      render json: { error: "Account not found" }, status: :not_found
      return
    end

    agent = account.build_agent(agent_number: agent_number, name: params[:name], slots: 0)

    if agent.save
      account.update(agent_number: agent.agent_number) # Assign the agent_number to the associated account
      render json: { agent: agent.reload }, status: :created
    else
      render json: { error: agent.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    agents = Agent.all
    render json: { agents: agents }, status: :ok
  end

  def show
    agent = Agent.find_by(agent_number: params[:id])

    if agent.nil?
      render json: { error: "Agent not found" }, status: :not_found
    else
      render json: { agent: agent }, status: :ok
    end
  end

  def purchase_slots
    agent = Agent.find_by(agent_number: params[:agent_number])

    if agent.nil?
      render json: { error: "Agent not found" }, status: :not_found
      return
    end

    num_slots = params[:num_slots].to_i

    begin
      agent.purchase_slots(num_slots)
      render json: { message: "Slots purchased successfully" }
    rescue ActiveRecord::RecordInvalid => e
      render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def generate_agent_number
    alpha_part = ("A".."Z").to_a.sample(2).join
    numeric_part = rand(1000..9999).to_s
    alpha_part + numeric_part
  end
end
