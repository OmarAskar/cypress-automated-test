describe(' Testing 3 project', () => {

  before(() => {
    cy.fixture('user').as('user')//call data from file lama test yrun 
    cy.fixture('contact').as('contact')
  })

  beforeEach(() => {
    cy.visitPage('/')// visit page befor each test run 
  })

  it('Home page loads', () => {
    cy.checkUrl('practicesoftwaretesting')
    cy.checkVisible('body')
    cy.get('.container').should('exist')
  })

  it('Navigation exists', () => {
    cy.get('nav').should('exist').and('be.visible')
    cy.get('a').its('length').should('be.greaterThan', 2)
    cy.get('.navbar-brand').should('exist')
  })

  it('Products visible', () => {
    cy.getProducts().should('exist')
    cy.getProducts().its('length').should('be.greaterThan', 0)
    cy.getProducts().first().should('be.visible')
  })

  it('Search works', () => {
    cy.searchProduct('hammer')
    cy.getProducts().should('exist')
    cy.getProducts().its('length').should('be.greaterThan', 0)
    cy.get('body').should('contain.text', 'hammer')
  })

  it('Invalid search', () => {
    cy.searchProduct('zzzz')
    cy.get('body').should('exist')
  })

  it('Open product page', () => {
    cy.openFirstProduct()
    cy.url().should('include', '/product')
    cy.get('h1').should('exist')
    cy.get('button').should('exist')
  })

  it('Add to cart', () => {
    cy.openFirstProduct()
    cy.addToCart()
    cy.openCart()
    cy.url().should('include', '/checkout')
    cy.get('body').should('exist')
    cy.get('body').should('be.visible')
  })

  it('Register page opens', () => {
    cy.visitPage('/auth/register')
    cy.url().should('include', 'register')
    cy.get('form').should('exist')
    cy.get('input').its('length').should('be.greaterThan', 0)
  })

  it('Login valid structure', function () {
    cy.visitPage('/auth/login')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
    cy.get('button').should('exist')
  })

  it('Login invalid attempt', () => {
    cy.login('wrong@test.com', '123')
    cy.url().should('include', 'login')
    cy.get('body').should('exist')
    cy.get('body').should('be.visible')
  })

   it('Category filter', () => {
    cy.selectCategory('Hand Tools')

    cy.get('[data-test="product-card"]', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
  })


  it('Price filter', () => {
    cy.filterPrice(0, 100)

    cy.get('[data-test="product-card"]', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
  })


  it('Contact page', () => {
    cy.visit('/contact')

    cy.get('form').should('be.visible')
    cy.get('input').should('exist')
    cy.get('textarea').should('exist')
  })


  it('Contact page URL', function () {
    cy.visit('/contact')
    cy.url().should('include', '/contact')
  })
})