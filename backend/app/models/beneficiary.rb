class Beneficiary < ApplicationRecord
 belongs_to :account
 has_many :transactions


    validates :name, presence: true, length: { minimum: 2, maximum: 100 }
    validates :email, presence: true, length: { maximum: 255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :phone_number, presence: true, numericality: { only_integer: true }, length: { minimum: 8, maximum: 15 }
end
