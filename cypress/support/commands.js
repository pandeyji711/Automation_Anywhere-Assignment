// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../pages/LoginPage.js";
import testData from "../fixtures/testData.json";
import AutomationPage from "../pages/AutomationPage.js";
// ✅ Custom command: login
Cypress.Commands.add("login", () => {
  const loginPage = new LoginPage();
  loginPage.login(testData.username, testData.password);

  cy.url({ timeout: 10000 }).should("include", "/#/home");
});
Cypress.Commands.add("openAutomationBotPage", (botName) => {
  const automationPage = new AutomationPage();
  automationPage.openAutomationBotPage(botName);
});
Cypress.Commands.add("logout", () => {
  cy.get('button[name="mysettings"]', { timeout: 10000 }).click();
  cy.wait(1000);
  cy.contains("button", "Log out").click();
});
