Feature: Login feature

Scenario: login feature for flipkart user 
Given user is on login page
When user enters username and password
Then user should be on Home page

Scenario: login feature for Apple user 
Given user is redirected to login page
When user enters username and password credentials
Then user should successfully login

Scenario: login feature for amazon user 
Given user is redirected to login page
When user enters username and password credentials
Then user should successfully login
