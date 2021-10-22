import HomePage_PO from '../../support/pageObjects/webriver-uni/Homepage_PO.js'
import ContactUs_PO from '../../support/pageObjects/webriver-uni/contact_PO.js'

/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    const homePage_PO = new HomePage_PO();
    const contactUs_PO = new ContactUs_PO();

    before(function () {
        cy.fixture('example').then(function (data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.visit("https://webdriveruniversity.com")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        homePage_PO.visitHomepage();
        homePage_PO.clickOn_ContactUs_Button();
    })

    it("Should be able to submit a successful submission via contact us form", () => {

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.get('#contact-us').click({force: true})
        // cy.get('[name ="first_name"]').type(data.first_name)
        // cy.get('[name ="last_name"]').type(data.last_name)
        // cy.get('[name ="email"]').type(data.email)
        // cy.get('[name ="email"]').should('have.attr', 'name', 'email')
        // cy.get('textarea.feedback-input').type("hello")
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
        // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "hello", 'h1', 'Thank You for your Message!');

        contactUs_PO.contactForm_Submission(data.first_name, data.last_name, data.email, "hello", 'h1', 'Thank You for your Message!')
    });

    // .only to keep only 1 test scenario 
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        // cy.get('[name ="first_name"]').type("Tom")
        // cy.get('[name ="last_name"]').type("Smith")
        // cy.get('textarea.feedback-input').type("hello")
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error: all fields are required')
        contactUs_PO.contactForm_Submission(data.first_name, data.last_name, " ", "hello", 'body', 'Error: Invalid email address');

    });
})
