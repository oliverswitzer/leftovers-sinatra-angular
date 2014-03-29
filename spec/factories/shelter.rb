# shelter.rb

require 'faker'

FactoryGirl.define do 
  factory :restaurant do
    name { "HELLO WORLD" }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }
    phone { Faker::PhoneNumber.phone_number }
    address { Faker::Address.city }     
  end
end

