class Transaction < ApplicationRecord
    belongs_to :account
    belongs_to :beneficiary
    belongs_to :beneficiary, optional: true
    validates :beneficiary, presence: true, if: -> { transaction_type == 'Send Money' }

  def self.all_transactions
    Transaction.all
  end
    
end
