Web Application that allows Restaurants to simply and quickly post the food they are about to throw out so Homeless Shelters can come and pick it up.

See demo here: http://rescuisine.herokuapp.com/ 
Or from the command line run 'redis start' and 'bundle exec sidekiq -r ./app.rb' to kickup sidekiq to allow for background queuing of the text messaging/email.
