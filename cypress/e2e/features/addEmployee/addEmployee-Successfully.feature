Feature: add employee functionality

  Scenario: Successfully add a new employee
    Given I login to the OrangeHRM application as Admin
    When I navigate to the Add Employee page
    And I set a random employee id
    And I fill the add employee form
    And I upload an employee image
    And I click save on add employee page
    Then I should see the employee personal details page

  
