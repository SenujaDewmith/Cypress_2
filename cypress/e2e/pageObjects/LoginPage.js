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
    cy.wait(3000);
  }

  verifyError() {
    cy.get("div.oxd-alert.oxd-alert--error p.oxd-alert-content-text") // select the error element
      .should("be.visible") // check it's visible
      .and("contain.text", "Invalid credentials"); // check it contains the expected text
    cy.wait(3000);
  }

  // click login without entering username/password
  clickLogin() {
    cy.get("button[type='submit']").click();
  }

  // verify required validations (shown when fields are empty)
  verifyRequiredValidation() {
    cy.get(".oxd-input-field-error-message")
      .should("be.visible")
      .and("contain.text", "Required");
    cy.wait(2000);
  }

  // forgot password flow
  clickForgotPassword() {
    cy.contains("Forgot your password?").click();
  }

  verifyResetPasswordPage() {
    cy.url().should("include", "/auth/requestPasswordResetCode");
    cy.wait(3000);
  }

  // password masking check
  verifyPasswordIsMasked() {
    cy.get("input[name='password']").should("have.attr", "type", "password");
  }

  // type a sample password to confirm it is masked (still type="password")
  enterSamplePassword() {
    cy.get("input[name='password']").clear().type("Test@123", { log: false });
    cy.wait(3000);
  }

  verifyDemoCredentialsHint() {
    cy.contains("Username").should("be.visible");
    cy.contains("Password").should("be.visible");
  }

}

export default LoginPage;
