require 'faker'

FactoryGirl.define do 
  factory :user do
    name "User1"
    password "Boomshakala" 
    password_confirmation "Boomshakala"  
  end
end

