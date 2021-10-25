/// <reference types="Cypress" />

describe("Testing contact page", () => {
    beforeEach(function () {
        cy.visit("https://webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    })

    it("Fill all the fields in contact form", () => {
        cy.get('[name="first_name"]').type("Jan")
        cy.get('[name="last_name"]').type("Kowalski")
        cy.get('[name="email"]').type("123@mail.com")
        cy.get('textarea.feedback-input').type("hello")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })
})
