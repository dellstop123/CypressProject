//<reference types="cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quiet: true,
      overwrite: false,
      html: false,
      json: true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here (args**, a,b )
    },
  },
});
