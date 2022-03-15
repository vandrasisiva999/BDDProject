Feature: Web Driver Login Feature1
Scenario Outline: Web Driver Login Test Scenario1

Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password


Examples:
	| username | password |
	| naveenk  | test@123 |