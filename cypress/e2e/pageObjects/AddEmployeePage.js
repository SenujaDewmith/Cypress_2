class AddEmployeePage {
  visit() {
    
    // cy.visit("/");
    // cy.wait(5000);

    cy.viewport(1280, 720);
    cy.visit("/");
  }

  // login(username, password) {
  // cy.get("input[name='username']", { timeout: 10000 }).should("be.visible").type(username);
  // cy.get("input[name='password']", { timeout: 10000 }).should("be.visible").type(password);
  // cy.get("button[type='submit']", { timeout: 10000 }).should("be.visible").click();
  // }

 

  // goToAddEmployeePage() {
  // cy.visit("/web/index.php/pim/addEmployee");
  // cy.location("pathname", { timeout: 10000 }).should("include", "/pim/addEmployee");
  // }

  // fillEmployeeDetails(firstName, middleName, lastName) {
  // cy.get("input[name='firstName']").clear().type(firstName);
  // cy.get("input[name='middleName']").clear().type(middleName);
  // cy.get("input[name='lastName']").clear().type(lastName);
  // cy.wait(5000);
  // }


  login(username, password) {
    cy.get("input[name='username']", { timeout: 10000 }).should("be.visible").type(username);
    cy.get("input[name='password']", { timeout: 10000 }).should("be.visible").type(password);
    cy.get("button[type='submit']", { timeout: 10000 }).should("be.visible").click();
  }

  goToAddEmployeePage() {
    cy.visit("/web/index.php/pim/addEmployee");
    cy.location("pathname", { timeout: 10000 }).should("include", "/pim/addEmployee");
  }

  fillEmployeeDetails(firstName, middleName, lastName) {
    cy.get("input[name='firstName']").clear().type(firstName);
    cy.get("input[name='middleName']").clear().type(middleName);
    cy.get("input[name='lastName']").clear().type(lastName);
    cy.wait(5000);
  }

  //method
   setEmployeeId(employeeId) {
    cy.contains("label", "Employee Id")
      .parents(".oxd-input-group")
      .find("input")
      .clear()
      .type(employeeId);
    }

  // 🔹 ADD THIS: set a random Employee ID and store it as alias
  setRandomEmployeeId(prefix = "EMP") {
    const random = Math.floor(1000 + Math.random() * 9000);
    const empId = `${prefix}${random}`;

    cy.contains("label", "Employee Id")
      .parents(".oxd-input-group")
      .find("input")
      .clear()
      .type(empId);

    cy.wrap(empId).as("employeeId");
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

  // first name validation
  enterMiddleName(middleName) {
    cy.get("input[name='middleName']").clear().type(middleName);
  }

  enterLastName(lastName) {
    cy.get("input[name='lastName']").clear().type(lastName);
  }
  verifyFirstNameRequired() {
    cy.get("input[name='firstName']")
      .parents(".oxd-input-group")
      .find(".oxd-input-field-error-message")
      .should("be.visible")
      .and("contain.text", "Required");
      cy.wait(1000);
  }

  // last name validation
  enterFirstName(firstName) {
  cy.get("input[name='firstName']").clear().type(firstName);
  }

  verifyLastNameRequired() {
    cy.get("input[name='lastName']")
      .parents(".oxd-input-group")
      .find(".oxd-input-field-error-message")
      .should("be.visible")
      .and("contain.text", "Required");
      cy.wait(1000);
  }


//methods for duplicate ID

captureGeneratedEmployeeId() {
  cy.contains("label", "Employee Id")
    .parents(".oxd-input-group")
    .find("input")
    .invoke("val")
    .then((employeeId) => {
      cy.wrap(employeeId).as("employeeId");
    });
}


enterCapturedEmployeeIdAndBlur() {
  cy.get("@employeeId").then((employeeId) => {
    cy.contains("label", "Employee Id")
      .parents(".oxd-input-group")
      .find("input")
      .clear()
      .type(employeeId)
      .blur();
  });
}


verifyPersonalDetailsPage() {
  cy.location("pathname", { timeout: 15000 }).should("include", "/viewPersonalDetails");
  cy.contains("h6", "Personal Details", { timeout: 10000 }).should("be.visible");
}

verifyDuplicateEmployeeIdValidation() {
  cy.contains(/already exists/i, { timeout: 10000 }).should("be.visible");
}

//invalid image validation
uploadInvalidEmployeeImage(fileName) {
  cy.get("input[type='file']").selectFile(`cypress/fixtures/${fileName}`, { force: true });
}

verifyInvalidFileTypeValidation() {
  cy.contains(/invalid file|file type|jpg|png|gif/i, { timeout: 10000 }).should("be.visible");
  cy.wait(3000);
}


//image size > 1MB

uploadLargeEmployeeImage(fileName) {
  cy.get("input[type='file']").selectFile(`cypress/fixtures/${fileName}`, { force: true });
}

verifyEmployeeImageSizeValidation() {
  cy.contains(/1 mb|1mb|file too large|exceeds/i, { timeout: 10000 }).should("be.visible");
}



}

export default AddEmployeePage;