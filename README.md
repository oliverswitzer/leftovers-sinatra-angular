# Rescuisine!

![Rescuisine](public/app/img/Rescuisine_screenShot.png)

Rescuisine is a web application that allows Restaurants to simply and quickly post the food they are about to throw out so Homeless Shelters can come and pick it up.

## Demo

Visit http://rescuisine.herokuapp.com/

## Command Line

Bundle the Gemfile

```ruby
bundle install
```

Migrate your database
```ruby
rake db:migrate
```

Start Redis and Sidekiq in separate terminal window (For background proccessing of Twillio integration)

```ruby
redis start
```

```ruby
bundle exec sidekiq -r ./app.rb
```

Run the server

```ruby
rackup
```

Application will be running on http://localhost:9292/

## How to use Rescuisine?

A restaurant can create a new pickup by clicking the new pickup button

![New Pickup](public/app/img/Rescuisine_new pickup_btn.png)

A voluteer can schedule to do a pickup by clicking on any of the rows then the Pickup? button

![Make Pickup](public/app/img/Rescuisine_confirm_pickup_btn.png)

They will then be taken to a new confirmation page where they can input their phone number.

![Confirm Pickup](public/app/img/Rescuisine_confirm_pickup.png)

After inputing their phone number, the restaurant and the voluteer will both receive text messages with a confirmation code for the pickup.

## Credits

Rescuisine was created and maintained by
[Keith Williams Jr.](http://codewardbound.tumblr.com/) and [Oliver Switzer](http://allyourcodesarebelongtous.tumblr.com/)

Rescuisine leverages technologies [Sinatra](http://www.sinatrarb.com/), [AngularJS](http://angularjs.org/), [Sidekiq](http://sidekiq.org/), and [Twillio](https://www.twilio.com/) 
