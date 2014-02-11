class Spacecat < ActiveRecord::Base
  serialize :preferences, Array
end