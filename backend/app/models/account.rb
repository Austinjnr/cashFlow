class Account < ApplicationRecord
  include ImageUploader::Attachment(:avatar_url)

  belongs_to :agent, optional: true, foreign_key: "agent_number", primary_key: "agent_number", inverse_of: :account
  belongs_to :user
  has_many :beneficiaries, dependent: :destroy
  has_many :transactions, dependent: :destroy
  has_one :wallet, dependent: :destroy

  validates :user_id, uniqueness: true
  validates :account_number, presence: true, uniqueness: true

  def send_welcome_sms
    puts "Sending welcome SMS..."
    account_sid = ENV["TWILIO_ACCOUNT_SID"]
    auth_token = ENV["TWILIO_AUTH_TOKEN"]
    client = Twilio::REST::Client.new(account_sid, auth_token)

    phone_number = self.phone_number

    client.messages.create(
      from: ENV["TWILIO_PHONE_NUMBER"],
      to: phone_number,
      body: "Welcome to our application! Your account has been successfully created.",
    )
  end
end
