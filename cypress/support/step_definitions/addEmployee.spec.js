import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AddEmployeePage from "../../e2e/pageObjects/AddEmployeePage";

const addEmployeePage = new AddEmployeePage();
let crd = null;

before(function () {
  cy.fixture("credentials").then((data) => {
    crd = data;
  });
});

Given("I login to the OrangeHRM application as Admin", () => {
  addEmployeePage.visit();
  addEmployeePage.login(crd.username, crd.password);
});

When("I navigate to the Add Employee page", () => {
  addEmployeePage.goToAddEmployeePage();
});

When("I fill the add employee form", () => {
  addEmployeePage.fillEmployeeDetails(
    crd.employee.firstName,
    crd.employee.middleName,
    crd.employee.lastName
  );
});


When("I upload an employee image", () => {
  addEmployeePage.uploadEmployeeImage(crd.employee.image);
});

When("I click save on add employee page", () => {
  addEmployeePage.clickSave();
});

Then("I should see the employee personal details page", () => {
  addEmployeePage.verifyEmployeeAdded();
});

//first name automation
When("I navigate to Add Employee page", () => {
  addEmployeePage.goToAddEmployeePage();
});

When("I enter employee middle name {string}", (middleName) => {
  addEmployeePage.enterMiddleName(middleName);
});

When("I enter employee last name {string}", (lastName) => {
  addEmployeePage.enterLastName(lastName);
});

When("I click on Save button in Add Employee page", () => {
  addEmployeePage.clickSave();
});

Then("I should see required validation for first name", () => {
  addEmployeePage.verifyFirstNameRequired();
});

//last name automation
When("I enter employee first name {string}", (firstName) => {
  addEmployeePage.enterFirstName(firstName);
});

Then("I should see required validation for last name", () => {
  addEmployeePage.verifyLastNameRequired();
});
