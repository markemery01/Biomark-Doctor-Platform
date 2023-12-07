const patientName = 'Medz Patientdev1  '
const patientDOB = '26-07-1980  (43 y.o)'

export class verifyForReviewTab{
    elements= {
        searchPatient:()=> cy.wait(2000).get('[data-test-id = "searchPatient"]'),
        forReviewTabClick:()=> cy.wait(2000).get('#dashboard-tab-1'),
        clickPatient:() =>cy.wait(2000).get('.css-9o7t33'),
        verifyProfileVisit:()=> cy.contains('Medz').should('exist'),
        verifyName:()=> cy.get('.jss174').should('have.text',patientName),
        verifyDOB:()=> cy.wait(1000).get(':nth-child(2) > .css-ck9o35 > .MuiTypography-root').should('have.text', patientDOB),

        editProfileBtn:()=>cy.get('[type="button"]').contains('Edit Profile'),
        editProfileClose:()=>cy.get('[data-testid = "CloseIcon"]'),

        formalLabPDFBtn:()=>cy.contains('Formal Lab PDF').should('be.visible'),

        resendToPatientBtn:()=>cy.contains('Resend To Patient').should('be.visible'),
        sendResultBtn:()=>cy.contains('Send Results'),
        resultSuccessNotification:()=>cy.get('.notification-container > :nth-child(1)').should('be.visible'),

        trendBtn:()=>cy.contains('Trends'),
        trendTabVerify:()=>cy.contains('Biomarker'),

        clinicalNoteTab:()=>cy.get('#simple-tab-2'),
        ecorderTab:()=>cy.get('.MuiGrid-root > .MuiButtonBase-root'),
        cancelEorderPopup:()=>cy.contains('Cancel')
    }
    
    Actions(){
        this.elements.searchPatient().click();
        cy.wait(1000)
        this.elements.searchPatient().type('bam123').type('{enter}')
        cy.wait(1000)
        this.elements.forReviewTabClick().click();
        cy.wait(1000)
        this.elements.clickPatient().click();
        this.elements.verifyName();
        this.elements.verifyDOB();
        this.elements.editProfileBtn().click();

        cy.get('form').within(()=>{
            this.elements.editProfileClose().click();
        })

        this.elements.formalLabPDFBtn().click();
        this.elements.resendToPatientBtn().click();
        this.elements.sendResultBtn().click();
        this.elements.resultSuccessNotification();
        this.elements.trendBtn().should('exist').click();
        this.elements.trendTabVerify().should('be.visible');
        this.elements.clinicalNoteTab().click();
        this.elements.ecorderTab().should('be.visible').click()
        this.elements.cancelEorderPopup().click()
        //this.Assertions();
    }
 
    Assertions(){
        cy.wait(2000).get('h2').first().next().then(($element) => {
            const text = $element.text();
            expect(text).to.equal('Release results to this patient');
            cy.log(text)
          });
    }
}