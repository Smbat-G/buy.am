const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUrl: "https://buy.am",
    watchForFileChanges: false,   // sav i jamanaka vor run chlini 
    defaultCommandTimeout: 10000,
 //  require('cypress-mochawesome-reporter/plugin')(on);    npm i --save-dev cypress-mochawesome-reportera
},
});
