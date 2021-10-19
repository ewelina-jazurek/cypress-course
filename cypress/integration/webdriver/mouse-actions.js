
/// <reference types="Cypress" />

describe("Test mouse actions via webdriveruni", () => {
    it("Scroll element into view", () => {

        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })


    });

    it("Drag and drop a draggable item", () => {

        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })


    });

    it("Perform a double mouse click", () => {

        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#double-click').dblclick();

    });

    it.only("I should be able to hold down the left mouse click button on the given element", () => {

        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        });

    });
});
