class AddEmployeePage {
  visit() {
    
    cy.visit("/");
    cy.wait(5000);

    // cy.viewport(1280, 720);
    // cy.visit("/");
  }

  login(username, password) {
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);
    cy.get("button[type='submit']").click();
    cy.wait(5000);
  }

  goToAddEmployeePage() {
    cy.contains("span", "PIM").click();
    cy.contains("a", "Add Employee").click();
    cy.url().should("include", "/pim/addEmployee");
    cy.wait(5000);
  }

  fillEmployeeDetails(firstName, middleName, lastName) {
  cy.get("input[name='firstName']").clear().type(firstName);
  cy.get("input[name='middleName']").clear().type(middleName);
  cy.get("input[name='lastName']").clear().type(lastName);
  cy.wait(5000);
  }

  uploadEmployeeImage(fileName) {
    cy.get("input[type='file']").selectFile(`cypress/fixtures/${fileName}`, { force: true });
  }

  clickSave() {
    cy.contains("button", "Save").click();
  }

  verifyEmployeeAdded() {
  cy.location("pathname", { timeout: 10000 }).should("include", "/viewPersonalDetails");
  cy.contains("h6", "Personal Details", { timeout: 10000 }).should("be.visible");
  }


}

export default AddEmployeePage;