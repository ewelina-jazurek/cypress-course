/// <reference types="Cypress" />

describe("Verify working of checkboxes", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })

    })

    it("Check 1 item in checkbox", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')

    })

    it("Check and validate multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-4"])

    })

    it.only("Uncheck 1 item in checkbox", () => {
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')

    })
})