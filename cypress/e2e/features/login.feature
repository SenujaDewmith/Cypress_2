Feature: login functionality

  Scenario: Successful login
    Given I open the OrangeHRM login page
    When I login as the Admin with valid password
    Then I should see the dashboard

  Scenario: Login failure
    Given I open the OrangeHRM login page
    When I login as the Admin with invalid password
    Then I should see an error message
