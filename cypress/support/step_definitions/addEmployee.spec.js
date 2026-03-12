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