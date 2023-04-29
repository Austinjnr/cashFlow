# app/models/wallet.rb
class Wallet < ApplicationRecord
  belongs_to :account
  # after_commit :wallet_statistics, only: [:send_money , :deposit]
  validates :balance, presence: true, numericality: { greater_than_or_equal_to: 0 }
  def self.find_by_account_number(account_number)
    joins(:account).find_by("accounts.account_number": account_number)
  end
  
  
end
