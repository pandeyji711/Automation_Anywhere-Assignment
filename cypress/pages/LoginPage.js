class LoginPage {
  visit() {
    cy.visit("https://community.cloud.automationanywhere.digital");
  }

  fillUsername(username) {
    cy.get(".textinput-cell-input-control", { timeout: 10000 })
      .first()
      .should("be.visible")
      .type(username);
  }

  fillPassword(password) {
    cy.get("[name='password']", { timeout: 10000 })
      .should("be.visible")
      .type(password);
  }

  submit() {
    cy.get("[name='submitLogin']", { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  logout() {
    cy.get('button[name="mysettings"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("button", "Log out").click();
  }
}

export default LoginPage;
