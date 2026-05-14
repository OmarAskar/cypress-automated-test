Cypress.Commands.add('visitPage', (url = '/') => {
  cy.visit(url)
})

Cypress.Commands.add('checkUrl', (text) => {
  cy.url().should('include', text)
})

Cypress.Commands.add('checkVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

Cypress.Commands.add('getProducts', () => {
  return cy.get('.card')
})

Cypress.Commands.add('searchProduct', (text) => {
  cy.get('#search-query', { timeout: 10000 })
    .clear()
    .type(`${text}{enter}`)
})

Cypress.Commands.add('openFirstProduct', () => {
  cy.get(".card[data-test='product-01KRK95Q962J2RZ1NJ3ZDJ141D']")
    .should('be.visible')
    .click()
})

Cypress.Commands.add('addToCart', () => {
  cy.get('#btn-add-to-cart').click()
})

Cypress.Commands.add('openCart', () => {
  cy.get("a[aria-label='cart']").click()
})

Cypress.Commands.add('removeFromCart', () => {
  cy.contains('Remove').click({ multiple: true })
})

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/auth/login')
  cy.get('input[type="email"]').type(email)
  cy.get('input[type="password"]').type(password)
  cy.get("input[value='Login']").click()
})

Cypress.Commands.add('fillRegister', (user) => {
  cy.get('input[name="first_name"]').type(user.firstName)
  cy.get('input[name="last_name"]').type(user.lastName)
  cy.get('input[type="email"]').type(user.email)
  cy.get('input[type="password"]').type(user.password)
  cy.contains('button', 'Register').click()
})

Cypress.Commands.add('selectCategory', (name) => {
  // open category dropdown first
  cy.get('[data-test="category"]')
    .should('be.visible')
    .click()

  // click category option
  cy.get('a.dropdown-item')
    .contains(name)
    .should('be.visible')
    .click()
})


Cypress.Commands.add('filterPrice', (min, max) => {
  cy.get('input[type="number"]')
    .first()
    .clear()
    .type(min)

  cy.get('input[type="number"]')
    .last()
    .clear()
    .type(max)

  // apply filter (button exists on UI)
  cy.contains('button', /filter|apply/i)
    .click({ force: true })
})


Cypress.Commands.add('fillContact', (data) => {
  cy.get('[data-test="first-name"], input[name="first_name"]')
    .first()
    .clear()
    .type(data.name)

  cy.get('input[type="email"]')
    .first()
    .clear()
    .type(data.email)

  cy.get('textarea')
    .first()
    .clear()
    .type(data.message)

  cy.contains('button', /send/i)
    .click()
})