class Beneficiary < ApplicationRecord
 belongs_to :account
 has_many :transactions
 # returns all the beneficiaries for a given account_id:
def self.all_beneficiaries(account_id)
    where account_id :account_id
end

# creates a new beneficiary for a given account_id:
def self.add_beneficiary(account_id, beneficiary_name, beneficiary_account_number)
    create(account_id: account_id, name: beneficiary_name, phone_number: beneficiary_phone_number, email: beneficiary_email)
end

end

