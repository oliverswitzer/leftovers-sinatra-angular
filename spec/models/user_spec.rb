# user_spec.rb
require_relative "../spec_helper"

describe User do 
    it "should create a user" do
      user = FactoryGirl.build(:user, :name => "DaDude", :password => "Boomshakala", :password_confirmation => "Boomshakala")
      expect(user.name).to eq "DaDude"
      expect(user.password).to eq "Boomshakala"
    end
  
end