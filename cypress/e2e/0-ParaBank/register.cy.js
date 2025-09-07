describe("Register Test Case", function callBack() {

    it("Register to application", () => {

        cy.visit("/")

        cy.contains("Register").eq(0).click()
        cy.get("input[name='customer.firstName']").type("Bella")
        cy.get("input[name='customer.lastName']").type("Casie")
        cy.get("input[name='customer.address.street']").type("Walington Street")
        cy.get("input[name='customer.address.city']").type("Los Angeles")
        cy.get("input[name='customer.address.state']").type("California")
        cy.get("input[name='customer.address.zipCode']").type("12345")
        cy.get("input[name='customer.phoneNumber']").type("+812121234")
        cy.get("input[name='customer.ssn']").type("1312")

        cy.get("input[name='customer.username']").type("BellaCasie")
        cy.get("input[name='customer.password']").type("bellacasie123")
        cy.get("input[name='repeatedPassword']").type("bellacasie123")
        cy.get("input.button").eq(1).click()


        cy.screenshot("Register-Result")
    })
})