const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUrl: "https://buy.am",
    watchForFileChanges: false,   // sav i jamanaka vor run chlini 
    defaultCommandTimeout: 10000,
  //   reporter: 'mochawesome',
  //   reporterOptions: {
  //     reportDir: 'cypress/reports', // Directory to save reports
  //     overwrite: false,             // Avoid overwriting reports
  //     html: true,                   // Enable HTML report generation
  //     json: true,                   // Enable JSON report generation
  //     charts: true  
  // },
},
});
