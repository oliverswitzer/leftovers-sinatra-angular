# restaurant_spec.rb


require_relative "../spec_helper"

describe Restaurant do 
  # let(:restaurant) { create(:restaurant) }

  describe "validations" do
    test_restaurant = FactoryGirl.build(:restaurant)
    puts test_restaurant
  end
end