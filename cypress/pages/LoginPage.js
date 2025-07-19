class LoginPage {
  visit() {
    cy.visit("https://community.cloud.automationanywhere.digital");
    return this;
  }

  fillUsername(username) {
    cy.get(".textinput-cell-input-control", { timeout: 10000 })
      .first()
      .should("be.visible")
      .type(username);
    return this;
  }

  fillPassword(password) {
    cy.get("[name='password']", { timeout: 10000 })
      .should("be.visible")
      .type(password);
    return this;
  }

  submit() {
    cy.get("[name='submitLogin']", { timeout: 10000 })
      .should("be.visible")
      .click();
    return this;
  }

  login(username, password) {
    this.visit().fillUsername(username).fillPassword(password).submit(); // <- renamed from clickLogin() to submit()

    cy.url({ timeout: 15000 }).should("include", "/#/home");
    return this;
  }

  logout() {
    cy.get('button[name="mysettings"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("button", "Log out").click();
  }
}

export default LoginPage;
