class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :phone_number
      t.string :avatar_url
      t.integer :id_number
      t.integer :account_number

      t.timestamps
    end
  end
end
