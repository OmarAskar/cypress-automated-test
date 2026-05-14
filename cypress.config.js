const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "jkbtks",
  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000
  }
})