class AddForeignKeyToAccounts < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :accounts, :agents, column: :agent_number, primary_key: :agent_number
  end
end
