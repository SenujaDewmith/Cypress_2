Feature: login functionality

  Scenario: Successful login
    Given I open the OrangeHRM login page
    When I login as the Admin with valid password
    Then I should see the dashboard

  Scenario: Login failure - With Invalid password
    Given I open the OrangeHRM login page
    When I login as the Admin with invalid password
    Then I should see an error message
  
  Scenario: Empty credentials validation
    Given I open the OrangeHRM login page
    When I click login without entering username and password
    Then I should see required validation messages

  Scenario: Forgot password navigation
    Given I open the OrangeHRM login page
    When I click Forgot your password link
    Then I should be navigated to reset password page
  
  Scenario: Password is masked
    Given I open the OrangeHRM login page
    When I enter a sample password in password field
    Then Password field should be masked
  
  Scenario: Login page shows demo credentials hint
    Given I open the OrangeHRM login page
    Then I should see demo credentials hint on login page
