import { VerifyPlainNote } from "../POM/plain_note_TA-542";
const PlainNoteElements = new VerifyPlainNote();

export class VerifyPmCareNote{

    elements ={
        verifyICNo:() => cy.get(':nth-child(6) > .css-ck9o35 > .MuiTypography-root'),
        eOrderBtn:() => cy.get('[to="/eorders"]').should('be.visible'),
        searchPatinetbtn:() => cy.get('input[name="search"]'),
        clickCorrectBtn:() => cy.get('.MuiPaper-root > .MuiButtonBase-root'),
        continueBtn:() => cy.contains('Continue'),
        clickPayorDetails:() => cy.get('#demo-simple-select'),
        selectPayorDev:()=> cy.get('[role="option"]').eq(1),
        selectPayorUat:()=> cy.get('[role="option"]').eq(3),
        verifyPMCareCard:() => cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root').should('be.visible'),
        verifyPMCareNote:() => cy.get('.MuiGrid-grid-md-12 > .MuiPaper-root').should('be.visible'),
        closeNote:() => cy.get('[data-testid="CloseIcon"]').eq(1)
    }

    Actions(PMCarePatientID, PMCarePatientName, Env){
        PlainNoteElements.elements.searchPatient().click()
        PlainNoteElements.elements.searchPatient().type(PMCarePatientID).type('{enter}')
        PlainNoteElements.elements.clickPatient().click()
        cy.wait(500)

        this.elements.verifyICNo().should(
            "have.text", PMCarePatientID
          );

        this.elements.eOrderBtn().click()  
        this.elements.searchPatinetbtn().click()
        this.elements.searchPatinetbtn().type(PMCarePatientID)
        cy.wait(200)
        cy.contains(PMCarePatientName).click()
        this.elements.clickCorrectBtn().click()
        this.elements.continueBtn().click()  
        this.elements.clickPayorDetails().click()
        cy.wait(300) 

        if(Env == 'dev')
            this.elements.selectPayorDev().click()
        else 
            this.elements.selectPayorUat().click()

        cy.wait(2500)
        this.elements.verifyPMCareCard() 

        this.elements.verifyPMCareNote().should(
            "have.text", "Note: The cost of this test will be billable to PMCare. You will only be able to select tests that are covered by this patient’s balance."
        )

        this.elements.closeNote().click()
        cy.wait(500)    
    }
}
//s