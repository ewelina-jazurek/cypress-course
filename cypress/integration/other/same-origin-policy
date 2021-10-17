
/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it("Validate 2 different domains", () => {

        cy.visit("https://webdriveruniversity.com")
        cy.visit("https://automationteststore.com/")


    });


    it("Validate 2 different domains via", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get('#automation-test-store')
            .invoke('removeAttr', 'target').click()

    });
})

