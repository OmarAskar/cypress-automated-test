class CartPage {
  openCart() {
    cy.get("a[aria-label='cart']")
      .should('be.visible')
      .click()
  }

  removeFromCart() {
    cy.contains('Remove')
      .click({ multiple: true })
  }

  verifyCheckoutPage() {
    cy.url().should('include', '/checkout')
    cy.get('body').should('exist').and('be.visible')
  }
}

export default new CartPage()