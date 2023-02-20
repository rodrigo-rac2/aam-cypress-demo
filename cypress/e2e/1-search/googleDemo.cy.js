/// <reference types="cypress" />

describe('Google search tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://google.com')
    // cy.get('iframe')
    //     .find('button[class*="M6CB1c rr4y5c"]')
    //     .should('be.visible')
    //     .click()
  })

  it('Feeling lucky elements should be visible', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[name=q]').should('be.visible')
    cy.get('input[name=btnI]').should('be.visible')
  })

  it('Should enter "AAM" in input box and feel lucky', () => {
    cy.get('[name=q]').clear().type("AAM")
    cy.get('input[name=btnI]').eq(1).click({force:true})
    cy.origin('https://www.aam.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message.includes('Things went bad')) {
          // we expected this error, so let's ignore it
          // and let the test continue`
          return false
        }
      })
    })
    //cy.visit('https://www.aam.com/pt-br')
  })

  it('Regular search elements should be visible', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[name=q]').should('be.visible')
    cy.get('input[name=btnK]').eq(1).should('be.visible')
  })

  it('Should enter "AAM" in input box and perform regular search', () => {
    cy.get('[name=q]').clear().type("AAM")
    cy.get('input[name=btnK]').eq(1).click({force:true})
  })

  it('Should check if "American Axle & Manufacturing" is displayed', () => {
    cy.get('[name=q]').clear().type("AAM")
    cy.get('input[name=btnK]').eq(1).click({force:true})
    cy.contains('American Axle & Manufacturing')
  })
})
