require './app.rb'
require './middleware/pickup_backend'
require 'pry'

use Name::PickupBackend

run Name::API.new

