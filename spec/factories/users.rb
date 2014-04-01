require 'faker'

FactoryGirl.define do 
  factory :user do
    pw = Faker::Internet.password 
    name {Faker::Internet.user_name}
    password pw
    password_confirmation pw 
  end
end

