const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.opencart.com',
    viewportHeight: 720,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
    },
  },
});
