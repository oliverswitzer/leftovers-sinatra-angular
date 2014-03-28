require './app.rb'
require './middleware/pickup_backend'

use App::PickupBackend

run App::Login.new
run App::API.new

#\ -s puma -E production
