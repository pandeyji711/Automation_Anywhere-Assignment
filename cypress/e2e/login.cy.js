/// <reference types = "cypress"/>

import testData from "../fixtures/testData.json";
import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

describe("Login Tests", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Login with invalid credentials", () => {
    loginPage.fillUsername("abcd");
    loginPage.fillPassword("12345");
    loginPage.submit();
    cy.wait(3000);
    // Optionally wait for error message here
  });

  it("Login with valid credentials", () => {
    loginPage.fillUsername(testData.username);
    loginPage.fillPassword(testData.password);
    loginPage.submit();
  });
  after(() => {
    cy.wait(3000);
    loginPage.logout();
  });
});
