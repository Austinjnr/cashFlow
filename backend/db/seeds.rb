require 'faker'

puts "Seeding records..."

# Create some users
10.times do
  User.create!(
    email: Faker::Internet.email,
    password: "password",
    username: Faker::Internet.username
  )
end

# Create some user accounts 
User.all.sample(7).each do |user|
  account = Account.create!(
    name: user.username,
    phone_number: Faker::PhoneNumber.cell_phone_in_e164.gsub(/^0/, '+254').slice(0, 11),
    avatar_url: Faker::Avatar.image,
    id_number: Faker::Number.number(digits: 8),
    account_number: Faker::Number.number(digits: 8),
    user: user
  )

  # Create some beneficiaries for each account
  3.times do
    Beneficiary.create!(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      phone_number: Faker::PhoneNumber.cell_phone_in_e164.gsub(/^0/, '+254').slice(0, 11),
      account: account
    )
  end

  # Create a wallet for each account
  Wallet.create!(
    balance: Faker::Number.number(digits: 6),
    last_transaction: "Deposit",
    account: account
  )

  # Create some transactions for each account
  4.times do
    transaction_type = ["shopping", "bills", "rental", "Top Up", "Send Money"].sample
    transaction_fee = Faker::Number.number(digits: 3)
    amount = Faker::Number.number(digits: 5)
    beneficiary = nil
    
    if transaction_type == "Send Money"
      # Select a specific beneficiary who belongs to the account
      beneficiary = account.beneficiaries.sample
    end
    
    Transaction.create!(
      transaction_type: transaction_type,
      transaction_fee: transaction_fee,
      amount: amount,
      account: account,
      beneficiary_id: beneficiary&.id
    )
  end
end

puts "Completed seeding"
