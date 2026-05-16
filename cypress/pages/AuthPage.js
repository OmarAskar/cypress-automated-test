class AuthPage {
  visitLogin() {
    cy.visit('/auth/login')
  }

  visitRegister() {
    cy.visit('/auth/register')
  }

  login(email, password) {
    this.visitLogin()

    cy.get('input[type="email"]')
      .clear()
      .type(email)

    cy.get('input[type="password"]')
      .clear()
      .type(password)

    cy.get("input[value='Login']")
      .click()
  }

  fillRegister(user) {
    cy.get('input[name="first_name"]')
      .type(user.firstName)

    cy.get('input[name="last_name"]')
      .type(user.lastName)

    cy.get('input[type="email"]')
      .type(user.email)

    cy.get('input[type="password"]')
      .type(user.password)

    cy.contains('button', 'Register')
      .click()
  }

  verifyLoginPage() {
    cy.url().should('include', 'login')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
    cy.get('button, input[value="Login"]').should('exist')
  }

  verifyRegisterPage() {
    cy.url().should('include', 'register')
    cy.get('form').should('exist')
    cy.get('input').its('length').should('be.greaterThan', 0)
  }
}

export default new AuthPage()