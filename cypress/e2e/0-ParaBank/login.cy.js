/// <reference types="Cypress"/>

describe("Login page test case",function callBack () {
    
    it("Login to application with correct credentials ", () => {

        cy.visit("/")
        
        cy.fixture("user").then(user => {
            cy.get("input[type ='text']").type(user.username)
            cy.get("input[type ='password']").type(user.password)
            cy.get("input[type='submit']").click()

        })
    })
})