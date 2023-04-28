class AddWalletStatisticsToWallets < ActiveRecord::Migration[7.0]
  def change
    add_column :wallets, :total_transactions_per_day, :integer
    add_column :wallets, :total_transactions_per_week, :integer
    add_column :wallets, :total_transactions_per_month, :integer
    add_column :wallets, :total_transactions_per_year, :integer
    add_column :wallets, :total_amount_per_day, :decimal
    add_column :wallets, :total_amount_per_week, :decimal
    add_column :wallets, :total_amount_per_month, :decimal
    add_column :wallets, :total_amount_per_year, :decimal
    add_column :wallets, :total_transaction_fee_per_day, :decimal
    add_column :wallets, :total_transaction_fee_per_week, :decimal
    add_column :wallets, :total_transaction_fee_per_month, :decimal
    add_column :wallets, :total_transaction_fee_per_year, :decimal
    add_column :wallets, :company_income_per_day, :decimal
    add_column :wallets, :company_income_per_week, :decimal
    add_column :wallets, :company_income_per_month, :decimal
    add_column :wallets, :company_income_per_year, :decimal
  end
end
