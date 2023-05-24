class CreateAgents < ActiveRecord::Migration[7.0]
  def change
    create_table :agents, id: false do |t|
      t.string :agent_number, primary_key: true
      t.integer :slots, default: 0
      t.string :name
      t.references :account, foreign_key: true
      t.timestamps
    end
  end
end
