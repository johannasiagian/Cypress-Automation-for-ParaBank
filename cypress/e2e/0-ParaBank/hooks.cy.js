describe("Hooks in Cypress", function callBack() {

    before(() => {
        cy.log("First method to execute")
    })

    beforeEach(() => {
        cy.log("Before each TC")
    })

    afterEach(() => {
        cy.log("After each TC")
        
    })
    it("TC#1", () => {
        cy.log("TC#1")
    })

    it("TC#2", () => {
        cy.log("TC#1")

    })

    it("TC#3", () => {
        cy.log("TC#1")

    })

    after(() => {
        cy.log("Last method to execute")
    })
})

