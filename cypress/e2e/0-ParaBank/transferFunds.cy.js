describe("Transfer Fund Test Case", function callBack (){

    beforeEach(() => {
       cy.visit("/")
        
        cy.fixture("user").then(user => {
        cy.get("input[type ='text']").type(user.username)
        cy.get("input[type ='password']").type(user.password)
        cy.get("input[type='submit']").click()
    })

    it("Transfer Fund to another account", () => {

        cy.contains("Transfer Funds").click()

        cy.get("#amount").type("10")
        cy.get("#fromAccountId").select("19227")
        cy.get("#toAccountId").select("19227")
        cy.get("input[type='submit']").click()
        cy.screenshot("transfer-refund-result")
    })
})

})