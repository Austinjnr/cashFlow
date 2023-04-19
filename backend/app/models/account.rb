class Account < ApplicationRecord
    belongs_to :user
    has_many :beneficiaries
    has_many :transactions
    has_many :wallets
end
