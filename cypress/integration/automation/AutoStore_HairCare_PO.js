class AutoStore_HairCare_PO {
    accesHomepage() {
        cy.visit("https://automationteststore.com/")
    }
    clickOn_HairCare_Link() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    }
}
export default AutoStore_HairCare_PO;
