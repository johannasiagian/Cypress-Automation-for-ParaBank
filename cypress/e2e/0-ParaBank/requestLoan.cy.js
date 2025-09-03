/// <reference types ="Cypress" />

describe("Request Loan Test Case", function () {

    beforeEach(() => {
        cy.visit("/")
        
        cy.fixture("user").then(user => {
        cy.get("input[type ='text']").type(user.username)
        cy.get("input[type ='password']").type(user.password)
        cy.get("input[type='submit']").click()
    })

    it("Add Request Loan", () => {
        
        cy.contains("Request Loan").should("be.visible").click()

        cy.get("#amount").type("12000")
        cy.get("#downPayment").type("10000")
        cy.get("input[type='button']").click()
        cy.screenshot("request-loan-result")
    })
})

})
