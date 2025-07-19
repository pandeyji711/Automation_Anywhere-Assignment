require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 70000,
    baseUrl: process.env.CYPRESS_BASE_URL,
    specPattern: "cypress/e2e/**/*.cy.js",
    watchForFileChanges: false,
    env: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});
