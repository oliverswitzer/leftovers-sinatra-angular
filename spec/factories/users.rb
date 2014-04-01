require 'faker'

FactoryGirl.define do 
  factory :user do
    name {Faker::Internet.user_name}
    password {Faker::Internet.password} 
    password_confirmation {Faker::Internet.password} 
  end
end

