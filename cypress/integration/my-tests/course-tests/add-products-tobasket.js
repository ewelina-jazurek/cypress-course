/// <reference types="Cypress" />

describe("Add products to basket", () => {
    beforeEach(function () {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit("https://automationteststore.com/")
    })

    it("Add multiple products to basket", () => {
        cy.get("a[href*='product/category&path=']").contains("Books").click()

        const books = [
            "Allegiant by Veronica Roth",
            "New French With Ease (1 book + 1 mp3 CD)",
            "Paper Towns by John Green"
        ];

        books.forEach(bookName => {
            cy.get('.fixed_wrapper .prdocutname').then(($el, index) => {
                if ($el.text === bookName) {
                    cy.log($el.text())
                    cy.get('.productcart').eq(index).click()
                }
            })
        })
        cy.get('.dropdown-toggle > .fa').click()

    })
})
