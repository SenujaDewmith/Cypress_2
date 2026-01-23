class LoginPage {
  visit() {
    cy.visit("/"); //https://opensource-demo.orangehrmlive.com
    cy.wait(5000);
  }

  login(username, password) {
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);
    cy.get("button[type='submit']").click();
    cy.wait(2000);
  }

  verifySuccessfulLogin() {
    cy.url().should("include", "/dashboard");
  }

  verifyError() {
    cy.get("div.oxd-alert.oxd-alert--error p.oxd-alert-content-text") // select the error element
      .should("be.visible") // check it's visible
      .and("contain.text", "Invalid credentials"); // check it contains the expected text
  }
}

export default LoginPage;
