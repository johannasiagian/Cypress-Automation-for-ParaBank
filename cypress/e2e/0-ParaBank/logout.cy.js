describe("Logout Test Case", function callBack() {

     beforeEach(() => {
        cy.visit("/")

        cy.get("input[type ='text']").type("aliciakeys")
        cy.get("input[type ='password']").type("aliciakeys123")
        cy.get("input[type='submit']").click()
    })

    it("Logout", () => {

        cy.contains("Log Out").click()
        cy.screenshot("LogOut-Result")
    })
})
