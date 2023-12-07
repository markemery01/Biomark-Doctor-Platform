import { VerifyPlainNote } from "../POM/plain_note_TA-542";
const PlainNoteElements = new VerifyPlainNote();

const PID = "MYIC133" //Resend Result (Dev,UAT)

export class VerifyEmailAndNumberUpdate{
    elements ={
        verifyICNo:() => cy.get(':nth-child(6) > .css-ck9o35 > .MuiTypography-root'),
        clickSendPatient:()=> cy.contains('Send To Patient'),
        clickResendPatient:()=>cy.contains('Resend To Patient'),
        clickEditNumber:()=> cy.get('.MuiFormGroup-root > :nth-child(1) > .MuiButton-root'),
        clickCountryCode:()=>cy.get('.flag-dropdown'), 
        selectCountry:()=> cy.get('[data-flag-key="flag_no_84"]'),
        editNumber:()=> cy.get('.form-control'),
        saveBtnClick:()=>cy.contains('Save contact details'),
        notificationPopUp:()=>cy.get('.notification'),
        emailRadioBtn:()=> cy.get('[type="radio"]').eq(1),
        clickEditEmail:()=>cy.get('.MuiFormGroup-root > :nth-child(2) > .MuiButton-root'),
        enterNewEmail:()=>cy.get('[placeholder="Email"]'),
        saveEmail:()=>cy.get('.jss278 > :nth-child(3) > .MuiButtonBase-root')
    }

    Actions(){
        PlainNoteElements.elements.searchPatient().click()
        PlainNoteElements.elements.searchPatient().type(PID).type('{enter}')
        PlainNoteElements.elements.clickPatient().click()
        cy.wait(500)

        this.elements.verifyICNo().should(
            "have.text", PID
        );

        this.elements.clickResendPatient().then($button => {
            if ($button.is(':visible')){
                $button.click() 
             }
            //else{
            //     this.elements.clickSendPatient().click()
            // }
        });

        this.elements.clickEditNumber().click()
        this.elements.editNumber().clear()
        this.elements.clickCountryCode().click()
        this.elements.selectCountry().click()
        this.elements.editNumber().type('7038053684')
        this.elements.saveBtnClick().click()
        this.elements.notificationPopUp().should('be.visible')
        this.elements.emailRadioBtn().click()
        this.elements.clickEditEmail().click()
        this.elements.enterNewEmail().clear()
        this.elements.enterNewEmail().type('sheetal.chaudhari@biomarking.com')
        this.elements.saveBtnClick().click()
        this.elements.notificationPopUp().should('be.visible')
        cy.wait(1000)
    }

}
//s