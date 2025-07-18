/// <reference types = "cypress"/>

import testData from "../fixtures/data.json";

describe("login test", () => {
  before(() => {
    cy.visit("https://community.cloud.automationanywhere.digital");
  });
  it("with invalid credencials", () => {
    cy.get(".textinput-cell-input-control", { timeout: 10000 })
      .first()
      .should("be.visible")
      .type("abcd");
    cy.get("[name='password']", { timeout: 10000 })
      .should("be.visible")
      .type("12345");
    cy.get("[name ='submitLogin']", { timeout: 2000 })
      .should("be.visible")
      .click();
    cy.wait(5000);
  });
});
describe("login test", () => {
  before(() => {
    cy.visit("https://community.cloud.automationanywhere.digital");
  });

  it("with valid credencials", () => {
    cy.get(".textinput-cell-input-control", { timeout: 10000 })
      .first()
      .should("be.visible")
      .type(testData.username);
    cy.get("[name='password']", { timeout: 10000 })
      .should("be.visible")
      .type(testData.password);
    cy.get("[name ='submitLogin']", { timeout: 2000 })
      .should("be.visible")
      .click();
    cy.wait(5000);
    cy.get('button[name="mysettings"]').click();
    cy.wait(2000);
    cy.contains("button", "Log out").click();
  });
});
