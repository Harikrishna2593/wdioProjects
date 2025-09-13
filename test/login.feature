Feature: Login feature

Scenario: login feature for flipkart user 
Given user is on login page
When user enters username and password
Then user should be on Home page

Scenario: login feature for Apple user 
Given user is redirected to login page
When user enters username and password credentials
Then user should successfully login


Scenario: login feature for swiggy user 
Given user is redirected to login pages
When user enters username and password credential
Then user should successfully logins

Scenario: login feature for amazon user 
Given user is redirected to login page
When user enters username and password credentials
Then user should successfully login

Scenario: login feature for reliance digi user 
Given user is redirected to login page
When user enters username and password credentials
Then user should successfully login
