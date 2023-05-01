class Transaction < ApplicationRecord
  belongs_to :account
  belongs_to :beneficiary, optional: true

  validates :beneficiary, presence: true, if: -> { transaction_type == "Send Money" }

  # define the beneficiary_id attribute
  attribute :beneficiary_id, :integer

  # Transaction Type validation
  validates :transaction_type, presence: true

  # Amount validation
  validates :amount, presence: true, numericality: { greater_than_or_equal_to: 0.01, message: "must be at least 0.01" }

  # Fee validation
  validates :transaction_fee, numericality: { greater_than_or_equal_to: 0, message: "must be a non-negative number" }
end
