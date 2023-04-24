class Transaction < ApplicationRecord
    belongs_to :account
    belongs_to :beneficiary

  def self.all_transactions
    Transaction.all
  end
    
end
