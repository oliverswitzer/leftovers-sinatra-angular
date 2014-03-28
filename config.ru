require './app.rb'
require './middleware/pickup_backend'

use Name::PickupBackend

run App::API.new