import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pageObjects/LoginPage";

const loginPage = new LoginPage(); //we create an instance of the page object here, so we can call it's methods
let crd = null; // A variable to hold our credentials from JSON file, which is initially empty

//Then we load fixture data before all functions
before(function () {
  cy.fixture("credentials").then((data) => {
    crd = data;
  });
});

Given("I open the OrangeHRM login page", () => {
  loginPage.visit();
});

When("I login as the Admin with valid password", () => {
  loginPage.login(crd.username, crd.password);
});

Then("I should see the dashboard", () => {
  // cy.url().should("include", "/dashboard");
  loginPage.verifySuccessfulLogin();
});

When("I login as the Admin with invalid password", () => {
  loginPage.login(crd.username, crd.invalidPassword);
});

Then("I should see an error message", () => {
  loginPage.verifyError();
});
