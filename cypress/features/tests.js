import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I open the home page', () => {
  cy.visitPage('/')
})

When('I visit {string}', (path) => {
  cy.visitPage(path)
})

When('I search for {string}', (text) => {
  cy.searchProduct(text)
})

When('I open the first product', () => {
  cy.openFirstProduct()
})

When('I add the product to the cart', () => {
  cy.addToCart()
})

When('I open the cart', () => {
  cy.openCart()
})

When('I login with {string} and {string}', (email, password) => {
  cy.login(email, password)
})

When('I select the {string} category', (category) => {
  cy.selectCategory(category)
})

When('I filter products between {int} and {int}', (min, max) => {
  cy.filterPrice(min, max)
})

Then('the URL should contain {string}', (text) => {
  cy.checkUrl(text)
})

Then('{string} should exist', (selector) => {
  cy.get(selector).should('exist')
})

Then('{string} should be visible', (selector) => {
  cy.checkVisible(selector)
})

Then('{string} should exist and be visible', (selector) => {
  cy.get(selector).should('exist').and('be.visible')
})

Then('there should be more than {int} {string} elements', (count, selector) => {
  cy.get(selector).its('length').should('be.greaterThan', count)
})

Then('products should be displayed', () => {
  cy.getProducts().should('exist')
  cy.getProducts().its('length').should('be.greaterThan', 0)
})

Then('the first product should be visible', () => {
  cy.getProducts().first().should('be.visible')
})

Then('the page should contain {string}', (text) => {
  cy.get('body').should('contain.text', text)
})