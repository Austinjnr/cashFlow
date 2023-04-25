class Wallet < ApplicationRecord
    belongs_to :account


    validates :account, presence: true
    validates :balance, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :last_transaction, presence: true
end
