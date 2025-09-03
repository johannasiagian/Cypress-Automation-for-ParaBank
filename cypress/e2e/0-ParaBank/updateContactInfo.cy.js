/// <reference types = "Cypress" />

describe("Update Profile Test Case", function callBack() {

    beforeEach (() => {
        cy.visit("/")
        
        cy.fixture("user").then(user => {
        cy.get("input[type ='text']").type(user.username)
        cy.get("input[type ='password']").type(user.password)
        cy.get("input[type='submit']").click()
    })

    it("Update Profile Contact Info", () => {

        cy.contains("Update Contact Info").should("be.visible").click()

        cy.get("input[name='customer.lastName']").clear()
        cy.get("input[name='customer.lastName']").type("swanson")
        cy.get("input[type='button']").click()
        cy.screenshot("update-profile-result")
    })
})

})