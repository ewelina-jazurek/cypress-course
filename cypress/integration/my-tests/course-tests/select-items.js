/// <reference types="Cypress" />

describe("Selecting items", () => {
    beforeEach(function () {
        cy.visit("https://automationteststore.com/")
    })

    it("Select a specific product", () => {
 cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
 .click();
    })

    it.only("add selected product to basket", () => {
        // cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
        // .click();
            cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
        .click();   

        cy.get('.cart').click()

           })
})

