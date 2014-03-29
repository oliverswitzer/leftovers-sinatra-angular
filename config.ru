require './app.rb'
require './middleware/pickup_backend'
require 'pry'

binding.pry

use App::PickupBackend

run App::API.new

