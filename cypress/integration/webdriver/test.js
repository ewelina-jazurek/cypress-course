
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // cypress code 
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.get('#contact-us').click({force: true})
        cy.get('[name ="first_name"]').type("Joe")
        cy.get('[name ="last_name"]').type("Smith")
        cy.get('[name ="email"]').type("joe@example.com")
        cy.get('[name ="email"]').should('have.attr', 'name', 'email')
        cy.get('textarea.feedback-input').type("hello")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    });

    // .only to keep only 1 test scenario 
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cypress code 
        cy.get('[name ="first_name"]').type("Tom")
        cy.get('[name ="last_name"]').type("Smith")
        cy.get('textarea.feedback-input').type("hello")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
    });
})
