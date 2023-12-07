export class login_Page{
    elements={

        //For Primary and Secodary accounts Login
        enterUsername:()=> cy.get('[data-test-id= "username"]'),
        enterPassword:()=> cy.get('[data-test-id= "password"]'),
        clickSignInButton:()=> cy.get('[data-test-id= "signInbutton"]'),
        clickCheckBox:()=> cy.get('[data-test-id = "clickCheckbox"]'),
        enterSecondaryUsername:()=> cy.get('[data-test-id = "secondaryUsername"]'),
        assertSuccessfullPrimaryAccountLogin:()=> cy.url().should('include', '/dashboard/all-patient'),
        assertFailedPrimaryAccountLogin:()=>  cy.get('.notification-message').should('be.visible'),
        assertSuccessfullSecondaryAccountLogin:()=> cy.url().should('include', '/dashboard/all-patient'),
        assertFailedSecondaryAccountLogin:()=> cy.get('.notification-message').should('be.visible'),
        clickLogoutButton:()=> cy.contains('Logout')
        
    }
}
