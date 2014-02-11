require 'bundler'
Bundler.require

require 'sinatra/activerecord'
require './lib/restaurant'

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
      # @restaurants = Restaurant.all

      # @restaurants.to_json
    end

    get '/restaurants/:id' do
    
    end

  end
end