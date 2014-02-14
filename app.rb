require 'bundler'
Bundler.require

require 'sinatra/activerecord'
require 'debugger'

Dir["./lib/*.rb"].each {|file| require file }

module Name
  class App < Sinatra::Application

    configure do
      set :root, File.dirname(__FILE__)
      set :public_folder, 'public/app'
    end

    set :database, "sqlite3:///database.db"

    get '/' do
      File.read(File.join('public/app', 'index.html'))
    end

    # http://www.dotnetguy.co.uk/post/2011/10/31/convert-dates-between-ruby-and-javascript/

    get '/restaurants' do
      @restaurants = Restaurant.all
      @restaurants.to_json
    end

    get '/restaurants/:id' do
      @restaurant = Restaurant.find(params[:id])
      @restaurant.to_json
    end

    post '/restaurants' do
      @restaurant = Restaurant.new(params[:restaurant])
    end

    get '/shelters' do
      @shelters = Shelter.all
      @shelters.to_json
    end

    get '/shelters/:id' do
      @shelter = Shelter.find(params[:id])
      @shelter.to_json
    end

    post '/shelters' do
      @shelters = Shelter.new(params[:shelter])
      #redirect?
    end

    get '/pickups.json' do
      @pickups = Pickup.all
      @pickups.to_json(:include => [:restaurant, :shelter])
    end

    get '/pickups/:id' + '.json' do
        @pickup = Pickup.find(params[:id])
        @pickup.to_json(:include => [:restaurant, :shelter])
    end

    get '/pickups' do
      redirect '/#/pickups'
    end

    get '/pickups/new' do
      erb :pickup_form
    end

    post '/pickups' do
      # debugger
      Pickup.new_pickup(params)
      redirect '/'
    end

    put '/pickups/:id' do

    end

    # get '/:filename' do
    #   respond_to do |f|
    #     f.js { redirect}
    #   end

    #   redirect '/'
    # end

  end
end