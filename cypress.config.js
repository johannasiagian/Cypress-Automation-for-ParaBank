const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC",   
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 10000,      
    viewportWidth: 1280,                
    viewportHeight: 720,
  },
});
