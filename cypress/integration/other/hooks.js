describe('Hooks', () => {

    before(() => {
        cy.log("runs once before all tests")
    })

    beforeEach(() => {
        cy.log("runs before every test block")
    })

    afterEach(() => {
        cy.log("runs after each test block")
    })

    after(() => {
        cy.log(" runs once all tests are done")
    })

    it("Example text2", () => {
        cy.log("Example text1")
    })
    it("Example text2", () => {
        cy.log("Example text2")
    })
})
