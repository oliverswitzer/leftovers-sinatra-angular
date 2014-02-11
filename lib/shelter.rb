# shelter.rb

class Shelter < ActiveRecord::Base
  has_many :pickups
end