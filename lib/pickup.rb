require 'json'
require 'date'

class Pickup < ActiveRecord::Base
  belongs_to :restaurant
  belongs_to :shelter

  def self.new_pickup(params)
    closing_time = DateTime.strptime("#{params[:pickup][:closing_time][:date]} #{params[:pickup][:closing_time][:time]}", "%Y-%m-%d %H:%M")
    params[:pickup][:closing_time] = closing_time.strftime("%Y-%m-%d %r")
    restaurant_JSON = JSON.parse(params[:restaurant_data])
    restaurant = Restaurant.create(restaurant_JSON)
    pickup = Pickup.new(params[:pickup])
    pickup.restaurant = restaurant
    pickup.save
  end
end
