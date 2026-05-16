class HomePage {
  visit() {
    cy.visit('/')
  }

  checkUrl(text) {
    cy.url().should('include', text)
  }

  checkVisible(selector) {
    cy.get(selector).should('be.visible')
  }

  getProducts() {
    return cy.get('.card')
  }

  searchProduct(text) {
    cy.get('#search-query', { timeout: 10000 })
      .clear()
      .type(`${text}{enter}`)
  }

  selectCategory(name) {
    cy.get('[data-test="category"]')
      .should('be.visible')
      .click()

    cy.get('a.dropdown-item')
      .contains(name)
      .should('be.visible')
      .click()
  }

  filterPrice(min, max) {
    cy.get('input[type="number"]')
      .first()
      .clear()
      .type(min)

    cy.get('input[type="number"]')
      .last()
      .clear()
      .type(max)

    cy.contains('button', /filter|apply/i)
      .click({ force: true })
  }
}

export default new HomePage()