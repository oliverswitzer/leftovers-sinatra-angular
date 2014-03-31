# shelter.rb

require 'faker'

FactoryGirl.define do 
  factory :shelter do
    name { "HELLO WORLD shelter" }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }
    phone { Faker::PhoneNumber.phone_number }
    address { Faker::Address.city }     
  end
end

