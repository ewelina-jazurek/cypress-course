class HomePage_PO {
    visitHomepage() {
        cy.visit("https://webdriveruniversity.com");
    }
    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, { timeout: 8000 })
    }
}
export default HomePage_PO;
