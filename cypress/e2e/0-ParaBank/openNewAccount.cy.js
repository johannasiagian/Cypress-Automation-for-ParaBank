describe("Open New Account Test Case", function (){

    beforeEach(()=> {
        cy.visit("/")
        
        cy.fixture("user").then(user => {
        cy.get("input[type ='text']").type(user.username)
        cy.get("input[type ='password']").type(user.password)
        cy.get("input[type='submit']").click()
    })

    it("Open New Account with all filled ", () => {

        cy.clickLink("Open New Account")

        cy.get("#type").select("1").should("have.value", "1")
        cy.get("#fromAccountId").select("14010")
        cy.get("input[type='button']").click()
        cy.screenshot("Open-new-account-result")
    })

})

})