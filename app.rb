require 'bundler'
Bundler.require
require 'sinatra/activerecord'
require 'debugger'

Dir["./lib/*.rb"].each {|file| require file }

set :server, 'thin'
set :sockets, []
enable :sessions

# Run with rackup -E development
module Name
  class API < Sinatra::Application

    configure :test do 
      set :database, "sqlite3:///test-database.db"
    end

    configure :development do 
      set :database, "sqlite3:///database.db"
    end

    configure :production do
      db = URI.parse(ENV['DATABASE_URL'] || 'postgres:///localhost/mydb')

       ActiveRecord::Base.establish_connection(
         :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
         :host     => db.host,
         :username => db.user,
         :password => db.password,
         :database => db.path[1..-1],
         :encoding => 'utf8'
       )
    end
    
    configure do
      set :root, File.dirname(__FILE__)
      set :public_folder, 'public/app'
    end

    before do
      pass if %w[login logout].include? request.path_info.split('/')[1]

      if !logged_in?
        halt erb :not_logged_in
      end
    end

    #Login
    get '/login' do 
      erb :login
    end

    post '/login' do
      debugger
      if params[:username] == 'admin' && params[:password] == 'admin'
        session['user_name'] = params[:username]
        redirect '/'
      else
        flash[:error] = "Wrong username or password"
        redirect '/login'
      end 
    end

    get '/logout' do 
      session['user_name'] = nil
      redirect '/login'
    end


    # Core App
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
      Pickup.new_pickup(params)
      redirect '/'     
    end

    put '/pickups/:id' do

    end

    post '/confirm' do
      # Confirmation.deliver(params[:number], params[:pickup_id])
      redirect "/#/pickups/#{params[:pickup_id]}"
    end
    
    helpers do     
      def logged_in?
        session['user_name'] #add token check
      end
    end

  end
end