import {login} from "../fixtures/selector.cy"
describe('login', () => {
  before(function () {
    cy.visit('https://www.konga.com')
  })
  it("LOGIN - I Should be able to sign in my account with valid email and password", function () {
    cy.get(login.loginBtn).click()
    cy.get(login.emailField).click()
    cy.get(login.emailField).type('olamitanjust4test@gmail.com')
    cy.get(login.passwordField).click()
    cy.get(login.passwordField).type('fagbo12345')
    cy.get(login.loginButton).click()

  })

  

  })