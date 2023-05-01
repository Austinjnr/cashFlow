class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :transaction_type
      t.integer :amount
      t.decimal :balance
      t.string :receiver_account_name
      t.integer :receiver_account_number
      t.decimal :transaction_fee, precision: 8, scale: 2
      t.references :account , foreign_key: true
      t.references :beneficiary , foreign_key: true
      t.timestamps
    end
  end
end
