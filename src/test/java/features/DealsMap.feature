Feature: Deal data creation 

Scenario: Cogmento CRM Create a new deal scenario 

	Given user is already on Login page 
	When Title of login page is Cogmento CRM 
	Then User enters username and password 
	
		| username | password |
		| lipsita.987@gmail.com | indu123$ |
		
	Then User clicks on Login button 
	Then User is on HomePage 
	Then user moves to new deal page 
	Then user enters deal details 
	
		|title | amount | probability | commission |
		| test deal1 | 1000 | 50 | 20 |
		| test deal2 | 2000 | 60 | 30 |
		| test deal3 | 3000 | 70 | 40 |
		| test deal4 | 4000 | 80 | 50 |
		
	Then Close the browser 
