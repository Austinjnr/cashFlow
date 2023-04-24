class Transaction < ApplicationRecord
    belongs_to :account
    belongs_to :beneficiary, optional: true

    validates :beneficiary, presence: true, if: -> { transaction_type == 'Send Money' }

    # define the beneficiary_id attribute
         attribute :beneficiary_id, :integer
end
