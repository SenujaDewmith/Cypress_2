Feature: Add Employee Required Field Validations

  Scenario: User should see validation when first name is missing
    Given I login to the OrangeHRM application as Admin
    When I navigate to Add Employee page
    And I enter employee middle name "K"
    And I enter employee last name "David"
    And I click on Save button in Add Employee page
    Then I should see required validation for first name

  Scenario: User should see validation when last name is missing
    Given I login to the OrangeHRM application as Admin
    When I navigate to Add Employee page
    And I enter employee first name "John"
    And I enter employee middle name "K"
    And I click on Save button in Add Employee page
    Then I should see required validation for last name

  Scenario: User should see validation when first name and last name are missing
    Given I login to the OrangeHRM application as Admin
    When I navigate to Add Employee page
    And I enter employee middle name "K"
    And I click on Save button in Add Employee page
    Then I should see required validation for first name
    And I should see required validation for last name

