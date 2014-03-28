require './app.rb'
require './middleware/pickup_backend'

use Name::PickupBackend
<<<<<<< HEAD
#\ -s puma -E production
run Name::App.new
=======

run App::API.new
>>>>>>> c37490d292e5cb19c3256f4108b81bef881300b4
