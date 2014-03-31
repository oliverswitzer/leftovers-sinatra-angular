# user_spec.rb
require_relative "../spec_helper"

describe User do 
    it "should create a user" do
      user = FactoryGirl.create(:user)
      expect(user.name).to eq "User1"
      expect(user.password).to eq "Boomshakala"
    end
  
end