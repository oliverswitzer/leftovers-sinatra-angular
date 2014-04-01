require_relative '../spec_helper'
require 'pry'
require 'database_cleaner'

# include Capybara::DSL

describe 'Logging in a user' do
  before do
    DatabaseCleaner.strategy = :transaction #rollsback the DB
    DatabaseCleaner.start #Setup of test
    @user = FactoryGirl.create(:user)
    visit "http://localhost:9292/login"
  end

  it 'passes if the user supplies valid credentials' do
    fill_in 'username', with: @user.name
    fill_in 'password', with: @user.password
    click_button 'login-btn'
    expect(current_path).to eq('/')
  end

  it 'fails if the user supplies invalid credentials' do
    fill_in 'username', with: 'User1'
    fill_in 'password', with: 'WRONG!'
    click_button 'login-btn'
    expect(page).to have_content('Wrong username or password')
  end

  after do
    DatabaseCleaner.clean # cleanup of the test
  end
end