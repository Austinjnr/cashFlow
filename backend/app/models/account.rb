require 'twilio-ruby'

class Account < ApplicationRecord
  after_create :send_welcome_sms
  belongs_to :user
  has_many :beneficiaries
  has_many :transactions
  has_many :wallets

  def send_welcome_sms
    puts "Sending welcome SMS..."
    account_sid = 'AC71fd87e5e3089d4d6a08fffe87c60bb0'
    auth_token = 'a2a4ebeddfa3dc034f07558c2f2d6d7f'
    client = Twilio::REST::Client.new(account_sid, auth_token)
  
    phone_number = self.phone_number
    unless phone_number.start_with?("+")
      phone_number = "+1" + phone_number
    end
  
    unless Phonelib.parse(phone_number).valid?
      # Handle invalid phone number error
      return
    end
  
    client.messages.create(
      from: '+15075163230',
      to: phone_number,
      body: 'Welcome to our application! Your account has been successfully created.'
    )
  end
  
  
end
