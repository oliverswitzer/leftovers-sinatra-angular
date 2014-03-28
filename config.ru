require './app.rb'
require './middleware/pickup_backend'

use App::PickupBackend

run App::API.new

