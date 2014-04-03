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

![Rescuisine](public/app/img/Rescuisine_new_pickup_btn.png)

## Credits

Rescuisine was created and maintained by
[Keith Williams Jr.](http://codewardbound.tumblr.com/) and [Oliver Switzer](http://allyourcodesarebelongtous.tumblr.com/)

Rescuisine leverages technologies [Sinatra](http://www.sinatrarb.com/), [AngularJS](http://angularjs.org/), [Sidekiq](http://sidekiq.org/), and [Twillio](https://www.twilio.com/) 
