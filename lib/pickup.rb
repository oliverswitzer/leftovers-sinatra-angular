class Pickup < ActiveRecord::Base
  belongs_to :restaurant
  belongs_to :shelter
end