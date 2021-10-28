import AutoStore_Homepage_PO from '../../support/pageObjects/automation-store/AutoStore_Homepage_PO.js'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-store/AutoStore_HairCare_PO.js'
/// <reference types="Cypress" />

describe("Add multiple product to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();


    before(function () {
        // cy.fixture("products").then(function (data) {
        //     globalThis.data = data;
        // });
    });

    beforeEach(function () {
        cy.clearLocalStorage();
        cy.clearCookies();
        autoStore_Homepage_PO.accesHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    });

    it("Add specific product to basket", () => {
        autoStore_HairCare_PO.addHairCareProductToBasket();
    });

    it.only("Add specific product to basket", () => {
        cy.fixture('products').then(products => {
            autoStore_HairCare_PO.addHairCareProductToBasket(products);
        });
    });

    it('test 2', () => {
        cy.log('products', globalThis.data);
    })
})
