class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :trasaction_type
      t.integer :amount
      t.string :trasaction_fee
      t.references :account , foreign_key: true
      t.timestamps
    end
  end
end
