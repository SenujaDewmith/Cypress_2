Feature: Add Employee Employee ID Validations

  Scenario: User should see validation when employee ID already exists
    Given I login to the OrangeHRM application as Admin
    When I navigate to Add Employee page
    And I set employee id "DUP002"
    And I enter employee first name "John"
    And I enter employee last name "David"
    And I click on Save button in Add Employee page
    Then I should be navigated to personal details page

    When I navigate to Add Employee page
    And I set employee id "DUP002"
    And I enter employee first name "Tom"
    And I enter employee last name "Peter"
    And I click on Save button in Add Employee page
    Then I should see duplicate employee id validation