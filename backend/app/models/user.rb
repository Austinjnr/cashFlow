require "bcrypt"

class User < ApplicationRecord
  has_many :accounts ,  dependent: :destroy
  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  has_secure_password
end
