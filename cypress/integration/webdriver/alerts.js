
/// <reference types="Cypress" />

describe("Handle js alerts WebdriverUni", () => {
    it("Confirm js alert contains the correct text", () => {
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        });
    });

    it.only("Validate js confirm alert box works correctly when clicking OK", () => {
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#button4').click()

        cy.on('window:alert', (str) => {
            return true
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    });
})
