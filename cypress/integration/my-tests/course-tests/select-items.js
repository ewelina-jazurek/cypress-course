/// <reference types="Cypress" />

describe("Selecting items", () => {
    beforeEach(function () {
        cy.visit("https://automationteststore.com/")
    })

    it("Select a specific product", () => {
        cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
            .click();
    })

    it("add 1 selected product to basket", () => {
        // cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
        // .click();
        cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
            .click();

        cy.get('.cart').click()

    })

    it("add 1 product to basket", () => {
        cy.get("a[href*='product/category&path=']").contains("Gift Ideas & Sets").click({ force: true })
        cy.get('.prdocutname').contains("Lancome Hypnose Doll Lashes Mascara 4-Piece Gift Set")
            .click()
        cy.get('.cart').click()
    });

    it("click on the selected item", () => {
        cy.get("a[href*='product/category&path=']").contains("Gift Ideas & Sets").click({ force: true })
        cy.get('.fixed_wrapper').find('.prdocutname').eq(2).click()
    });


    it("click on the selected item", () => {
        cy.get("a[href*='product/category&path=']").contains("Gift Ideas & Sets").click({ force: true })
        cy.get('.fixed_wrapper').contains("Lancome Hypnose Doll Lashes Mascara 4-Piece Gift Set")
            .click().then(function (itemHeaderText) {
                console.log("Selected the following item: " + itemHeaderText.text())
            })
    });

    it("click on the selected item", () => {
        cy.get("a[href*='product/category&path=']").contains("Gift Ideas & Sets").click({ force: true })
            .then(function (gift) {
                cy.log("this is the page with" + gift.text())
            })

    })

    it.only("click on the selected item", () => {
        cy.get("a[href*='product/category&path=']").contains("Gift Ideas & Sets").click({ force: true })
        cy.get('.heading1').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("found header text:" + headerText)

        })

    });

    it("click on the selected item", () => {
        cy.get("a[href*='product/category&path=']").contains("Face").click({ force: true })


    });
})