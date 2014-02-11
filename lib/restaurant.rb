class Restaurant < ActiveRecord::Base
  has_many :pickups
end