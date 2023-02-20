const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5n1ze8',
  viewportWidth: 1278,
  viewportHeight: 780,
  defaultCommandTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
