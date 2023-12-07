import { VerifyLogoutFeature } from "../POM/logout_TA-30";
const VerifyLogOutElements = new VerifyLogoutFeature();

export class VerifyViewSettings{

    elements = {
        clickSettings:()=> cy.contains('Settings').should('be.visible'),
        verifySetting:()=> cy.contains('Settings')
    }

    Actions(){
        VerifyLogOutElements.elements.clickMenu().click()
        this.elements.clickSettings().click()
    }

    Assertions(Env){
        cy.url().should('eq', 'https://'+Env+'-my.biomarking.com/settings');
        this.elements.verifySetting().should("be.visible")
    }
}
//s