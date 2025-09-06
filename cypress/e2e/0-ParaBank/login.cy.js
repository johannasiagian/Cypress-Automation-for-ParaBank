describe("Login page test case",function callBack () {
    
    beforeEach(()   => {
        cy.visit("/")
    })

    it("Login to application with correct credentials ", () => {
        
        cy.fixture("user").then(user => {
            cy.get("input[type ='text']").type(user.username)
            cy.get("input[type ='password']").type(user.password)
            cy.get("input[type='submit']").click()

        })

        cy.contains("Accounts Overview").should("be.visible")
        cy.url().should("include", "/overview.htm")
    })

    it("Login to application with invalid username", () => {

        cy.fixture("user").then(user => {
            cy.get("input[type ='text']").type("testtestest")
            cy.get("input[type ='password']").type(user.password)
            cy.get("input[type='submit']").click()
        })
    })

    it("Login to application with invalid password", () => {

        cy.fixture("user").then(user => {
            cy.get("input[type ='text']").type(user.username)
            cy.get("input[type ='password']").type("lalallaalalala")
            cy.get("input[type='submit']").click()
        })

    })
})