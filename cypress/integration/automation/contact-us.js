
/// <reference types="Cypress" />

describe("Test Contact Us form via WAutomation Test Store", () => {

    it("Should be able to submit a successful submission via contact us form",
        () => {
            // cypress code 
            cy.visit("https://automationteststore.com/")
            // cy.get('#contact-us').click({force: true})
            cy.get("a[href$= 'contact']").click().then(function (linkText) {
                cy.log("Clicked on link using text: " + linkText.text())
            });
            //a[contains(@href, 'contact')]
            // cy.xpath("//a[contains(@href, 'contact')]").click;
            cy.get('#ContactUsFrm_first_name').type("Joe");
            cy.get('#ContactUsFrm_email').type("joe@example.com");
            cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
            cy.get('#ContactUsFrm_enquiry').type("hello")
            cy.get("button[title='Submit']").click();
            cy.get('.mb40 > :nth-child(3)').should('have.text',
                'Your enquiry has been successfully sent to the store owner!');
            cy.log("Test is completed")
        });
})
