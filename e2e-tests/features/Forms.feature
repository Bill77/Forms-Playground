Feature: Formly Functional Testing

	Scenario: Test that the page properly loads
		Given I go to "localhost:8000/app"
		Then I should see "Enter a number"		
	
	Scenario: Test the form validation for Enter a number (0-100) passes
		Given I go to "localhost:8000/app"
		When I type "1" in the input control with an ID of "randomNumber"
		Then I should expect no validation errors
		
	Scenario: Test the form validation for Enter a number (0-100) fails
		Given I go to "localhost:8000/app"
		When I type "1000" in the input control with an ID of "randomNumber"
		Then I should expect validation errors