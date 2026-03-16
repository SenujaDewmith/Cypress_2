Feature: Add Employee Upload Validations

  Scenario: User should see validation when uploading an invalid profile image file type
    Given I login to the OrangeHRM application as Admin
    When I navigate to Add Employee page
    And I enter employee first name "John"
    And I enter employee last name "David"
    And I upload an invalid employee image "credentials.json"
    Then I should see invalid file type validation for employee image

  Scenario: User should see validation when uploaded employee image exceeds 1 MB
    Given I login to the OrangeHRM application as Admin
    When I navigate to Add Employee page
    And I enter employee first name "John"
    And I enter employee last name "David"
    And I upload a large employee image "largeImage.jpg"
    Then I should see file size validation for employee image
