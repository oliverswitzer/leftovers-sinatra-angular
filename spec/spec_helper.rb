# spec_helper.rb

# ENV['RACK_ENV'] = "test"

# This file is copied to spec/ when you run 'rails generate rspec:install'
require 'rubygems'
require 'bundler'
Bundler.setup(:default, :test)
require 'sinatra'
require 'rspec'
require 'rack/test'
require 'factory_girl'
require 'capybara'
require 'capybara/rspec'
require 'capybara/dsl'
require 'simplecov'
require 'database_cleaner'
require 'pry'
require File.join(File.dirname(__FILE__), '../app')


# set test environment
set :environment, :test
set :run, false
set :raise_errors, true
set :logging, false

def app
  Sinatra::Application
end

#Set Capybara up with rack app
Capybara.app = Name::API

# require factories
Dir[File.dirname(__FILE__)+"/factories/*.rb"].each {|file| require file }

#Setup Database Cleaner
begin
  DatabaseCleaner.strategy = :transaction #rollsback the DB
rescue NameError
  raise "You need to add database_cleaner to your Gemfile (in the :test group) if you wish to use it."
end

# establish in-memory database for testing

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include FactoryGirl::Syntax::Methods
  config.include Capybara::DSL
end
