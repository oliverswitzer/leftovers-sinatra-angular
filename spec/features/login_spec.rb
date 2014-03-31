require_relative '../spec_helper'
require 'pry'

# include Capybara::DSL

describe 'Logging in a user' do
  before do
    # @user = FactoryGirl.create(:user)
    visit "http://localhost:9292/login"
  end

  it 'passes if the user supplies valid credentials' do
    fill_in 'username', with: "admin"
    fill_in 'password', with: "admin"
    click_button 'login-btn'
    expect(current_path).to eq('/')
  end

  it 'fails if the user supplies invalid credentials' do
    fill_in 'username', with: 'User1'
    fill_in 'password', with: 'WRONG!'

    click_button 'login-btn'

    expect(page).to have_content('Wrong username or password')
  end
end