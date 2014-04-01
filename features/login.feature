Feature: Logging in as a user
  In order to login in
  As a registered user
  I want to be able to input my email and password and be taken to pickups page

Scenario: Logging in with valid information
    Given I'm on the signin page
    When I signin with valid login "admin"
    Then I expect to be taken to the pickups page