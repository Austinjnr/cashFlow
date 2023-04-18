require 'faker'
puts "Seeding records..."

# Create some users
5.times do
  User.create!(
    email: Faker::Internet.email,
    password: "password",
    username: Faker::Internet.username
  )
end



puts "Complited seeding"