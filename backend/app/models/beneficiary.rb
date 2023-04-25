class Beneficiary < ApplicationRecord
 belongs_to :account
 has_many :transactions
end
