Feature: Deal data creation

Scenario: Cogmento CRM Create a new deal scenario

Given user is already on Login page
When Title of login page is Cogmento CRM
Then User enters username and password
| lipsita.987@gmail.com | indu123$ |

Then User clicks on Login button
Then User is on HomePage
Then user moves to new deal page
Then user enters deal details 
| test deal | 1000 | 50 | 20 |
Then Close the browser



	