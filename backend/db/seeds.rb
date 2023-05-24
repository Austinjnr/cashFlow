require "faker"

puts "Seeding records..."

# Create some users
10.times do
  User.create!(
    email: Faker::Internet.email,
    password: "password",
    username: Faker::Internet.username,
  )
end

# Create some user accounts
User.all.sample(7).each do |user|
  account = Account.create!(
    name: user.username,
    phone_number: Faker::PhoneNumber.cell_phone_in_e164.gsub(/^0/, "+254").slice(0, 11),
    avatar_url: Faker::Avatar.image,
    id_number: Faker::Number.number(digits: 8),
    account_number: Faker::Number.number(digits: 8),
    user: user,
  )

  # Create some beneficiaries for each account
  account_numbers = Account.pluck(:account_number)
  3.times do
    Beneficiary.create!(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      account_number: account_numbers.sample,
      phone_number: Faker::PhoneNumber.cell_phone_in_e164.gsub(/^0/, "+254").slice(0..11),
      account: account,
    )
  end

  # Create a wallet for each account, only if it doesn't already exist
  unless account.wallet.present?
    Wallet.create!(
      balance: Faker::Number.number(digits: 6),
      last_transaction: ["deposit", "rent", "rent", "fee"].sample,
      account_number: account.account_number,
      account: account,
    )
  end
end

# Create some agents
Account.all.each do |account|
  agent_number = Faker::Alphanumeric.alphanumeric(number: 8, min_alpha: 2).upcase
  agent = Agent.new(
    agent_number: agent_number,
    slots: Faker::Number.between(from: 1, to: 10),
    name: Faker::Name.name,
    account_id: account.id
  )
  agent.save!
end

puts "Completed seeding"
