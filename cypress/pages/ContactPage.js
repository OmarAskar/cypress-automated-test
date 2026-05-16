class ContactPage {
  visit() {
    cy.visit('/contact')
  }

  fillContact(data) {
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
  }

  verifyContactPage() {
    cy.get('form').should('be.visible')
    cy.get('input').should('exist')
    cy.get('textarea').should('exist')
  }

  verifyContactUrl() {
    cy.url().should('include', '/contact')
  }
}

export default new ContactPage()