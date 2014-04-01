before do
  DatabaseCleaner.start #Setup of test
end

Given(/^I'm on the signin page$/) do
  @user = FactoryGirl.create(:user)
  visit "/login"
end

When(/^I signin with valid login "(.*?)"$/) do |username|
  fill_in 'username', with: @user.name
  fill_in 'password', with: @user.password
  click_button 'login-btn'
end

Then(/^I expect to be taken to the pickups page$/) do
  expect(current_path).to eq('/')
end

after do
  DatabaseCleaner.clean # cleanup of the test
end