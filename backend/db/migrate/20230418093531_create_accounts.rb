class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :phone_number
      t.string :avatar_url
      t.string :name
      t.integer :id_number
      t.integer :account_number
      t.references :user, foreign_key: true
      t.string :agent_number
      t.timestamps
    end
    add_index :accounts, :account_number, unique: true
  end
end
