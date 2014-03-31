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
require 'simplecov'
require File.join(File.dirname(__FILE__), '../app')

SimpleCov.start do 
  add_filter '/db/'    
  add_filter '/config/'
  add_filter '/middlware/'
  add_filter '/spec/'
  add_filter '/views/'
end


# set test environment
set :environment, :test
set :run, false
set :raise_errors, true
set :logging, false

def app
  Sinatra::Application
end

# require factories
Dir[File.dirname(__FILE__)+"/factories/*.rb"].each {|file| require file }

# establish in-memory database for testing

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include FactoryGirl::Syntax::Methods
end
