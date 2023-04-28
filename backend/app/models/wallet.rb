# app/models/wallet.rb
class Wallet < ApplicationRecord
  belongs_to :account
  # after_commit :wallet_statistics, only: [:send_money , :deposit]
  validates :balance, presence: true, numericality: { greater_than_or_equal_to: 0 }
  
end
