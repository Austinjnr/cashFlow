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
  Account.create!(
    name: user.username,
    phone_number: Faker::PhoneNumber.cell_phone,
    avatar_url: Faker::Avatar.image,
    id_number: Faker::Number.number(digits: 8),
    account_number: Faker::Number.number(digits: 8),
    user_id: user.id
  )
end



    

puts "Complited seeding"