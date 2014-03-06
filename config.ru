require './app.rb'
require './middleware/pickup_backend'

use Name::PickupBackend
#\ -s puma -E production
run Name::App.new