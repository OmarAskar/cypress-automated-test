class ProductPage {
  openFirstProduct() {
    cy.get(".card[data-test='product-01KRK95Q962J2RZ1NJ3ZDJ141D']")
      .should('be.visible')
      .click()
  }

  addToCart() {
    cy.get('#btn-add-to-cart')
      .should('be.visible')
      .click()
  }

  verifyProductPage() {
    cy.url().should('include', '/product')
    cy.get('h1').should('exist')
    cy.get('button').should('exist')
  }
}

export default new ProductPage()