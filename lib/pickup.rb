require 'json'

class Pickup < ActiveRecord::Base
  belongs_to :restaurant
  belongs_to :shelter

  def self.new_pickup(params)
    debugger
    closing_time = Time.parse("#{params[:pickup][:closing_date]} #{params[:pickup][:closing_time]}")
    params[:pickup][:closing_time] = closing_time
    restaurant_JSON = JSON.parse(params[:restaurant_data])
    restaurant = Restaurant.create(restaurant_JSON)

    pickup = Pickup.new(params[:pickup])
    pickup.restaurant = restaurant
    pickup.save
    debugger
    puts
  end
end