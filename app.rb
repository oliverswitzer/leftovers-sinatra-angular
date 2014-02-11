require 'bundler'
Bundler.require

require 'sinatra/activerecord'
require './lib/spacecat'

class SpacecatApp < Sinatra::Application

  configure do
    set :root, File.dirname(__FILE__)
    set :public_folder, 'public/app'
  end

  set :database, "sqlite3:///database.db"

  get '/' do
    File.read(File.join('public/app', 'index.html'))
  end

  get '/spacecats' do
    @spacecats = Spacecat.all

    @spacecats.to_json
  end

  get '/spacecats/:id' do
    @spacecat = Spacecat.find(params[:id])

    @spacecat.to_json
  end

end