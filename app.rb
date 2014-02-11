require 'bundler'
Bundler.require

require 'sinatra/activerecord'

class App < Sinatra::Application

  configure do
    set :root, File.dirname(__FILE__)
    set :public_folder, 'public/app'
  end

  set :database, "sqlite3:///database.db"

  get '/' do
    File.read(File.join('public/app', 'index.html'))
  end

  get '/spacecats' do
    # @spacecats = Spacecat.all

    # @spacecats.to_json
  end

  get '/spacecats/:id' do
  
  end

end