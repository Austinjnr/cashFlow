class AddAccountNumberToWallets < ActiveRecord::Migration[6.1]
  def change
    add_column :wallets, :account_number, :integer
    add_index :wallets, :account_number, unique: true
    
    add_foreign_key :wallets, :accounts, column: :account_number, primary_key: :account_number
  end
end
