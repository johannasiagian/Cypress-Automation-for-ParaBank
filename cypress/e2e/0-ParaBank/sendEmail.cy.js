/// <reference types = "Cypress" />

describe("Send Email to Customer Case Test Case", function callBack(){

    beforeEach(() => {
        cy.visit("/")
        
        cy.fixture("user").then(user => {
        cy.get("input[type ='text']").type(user.username)
        cy.get("input[type ='password']").type(user.password)
        cy.get("input[type='submit']").click()
    })

    it("Send Email", () => {

        cy.contains("contact").click()

        cy.get("#name").type("John")
        cy.get("#email").type("Smith@gmail.com")
        cy.get("#phone").type("081234567890")
        cy.get("#message").type("Thank you for the website")
        cy.get("input[type = 'submit']").click()
        cy.screenshot("Send-Email-Result")
    })
})

})