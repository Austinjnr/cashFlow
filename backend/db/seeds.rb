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
    phone_number: Faker::PhoneNumber.cell_phone,
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
      phone_number: Faker::PhoneNumber.cell_phone,
      account: account
    )
  end

  # Create a wallet for each account
  Wallet.create!(
    balance: Faker::Number.number(digits: 6),
    last_transaction: "Deposit",
    account: account
  )

  #craete a transaction for each account
  Account.all.each do |account|
    4.times do
      Transaction.create!(
        transaction_type: ["shopping" , "bills" , "rental"].sample,
        transaction_fee: Faker::Number.number(digits: 3),
        amount: Faker::Number.number(digits: 5),
        account: account
      )
    end
  end
end

puts "Completed seeding"
