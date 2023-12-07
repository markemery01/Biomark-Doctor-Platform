export class VerifyLogoutFeature{

    elements = {
        clickMenu :() => cy.get('#AvatarMenu').should('be.visible'),
        clickLogout :() => cy.contains('Logout').should('be.visible')
    }

    Actions(){
        this.elements.clickMenu().click()
        this.elements.clickLogout().click()
    }

    Assertions(Env){
        cy.url().should('eq', 'https://'+Env+'-my.biomarking.com/login');
    }
}