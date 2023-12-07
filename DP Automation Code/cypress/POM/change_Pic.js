import { VerifyLogoutFeature } from "../POM/logout_TA-30";
const VerifyLogOutElements = new VerifyLogoutFeature();

const filepath = 'cypress/profilePic/images.jpeg'

export class ChangePicture{

    elements ={
        clickMyProfile:()=> cy.contains('View My Profile').should('be.visible'),
        clickProfile:()=> cy.get('svg[data-testid="AddPhotoAlternateIcon"]'),
        selectPicture:()=> cy.get('input[type="file"]'),
        clickSave:()=> cy.contains('Save Changes'),
        assertNotificationMessage:()=> cy.get('.notification-message')   
    }

    Actions(){
        VerifyLogOutElements.elements.clickMenu().click()
        this.elements.clickMyProfile().click()
        this.elements.clickProfile().invoke('show').click({force:true})
        cy.wait(500)
        this.elements.selectPicture().invoke('show').selectFile(filepath, {force:true})
        this.elements.clickSave().click()
    }

    Assertions(){
        this.elements.assertNotificationMessage().should('be.visible')
    }
}