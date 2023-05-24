class Agent < ApplicationRecord
  self.primary_key = "agent_number"
  belongs_to :account
#    foreign_key: "agent_number", primary_key: "agent_number", inverse_of: :agent
  validates :slots, numericality: { greater_than_or_equal_to: 0 }

  def purchase_slots(num_slots)
    transaction do
      self.slots += num_slots
      save!

      profit = num_slots * 0.005

      unless account.present?
        errors.add(:base, "Account must exist")
        raise ActiveRecord::RecordInvalid, self
      end

      unless profit >= 0
        errors.add(:base, "Transaction fee must be a non-negative number")
        raise ActiveRecord::RecordInvalid, self
      end

      Transaction.create!(
        transaction_type: "profit",
        amount: profit,
        transaction_fee: 0,
        account_id: account.id,
        created_at: Time.now.in_time_zone("Africa/Nairobi").strftime("%A, %d %B %Y"),
        updated_at: Time.now.in_time_zone("Africa/Nairobi").strftime("%H:%M"),
      )
    end
  end
end
