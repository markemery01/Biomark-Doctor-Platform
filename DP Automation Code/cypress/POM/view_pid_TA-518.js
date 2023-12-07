import { VerifyPlainNote } from "../POM/plain_note_TA-542";
const PlainNoteElements = new VerifyPlainNote();

export class VerifyPID{
    elements = {
        verifyPIC :() => cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)').should('be.visible'),
        verifyPName : () => cy.get('.css-9o7t33 > .MuiTypography-root').should('be.visible')
    }

    Actions(PID,Env){
        PlainNoteElements.elements.searchPatient().click()
        PlainNoteElements.elements.searchPatient().type('sheetal c').type('{enter}')

        this.elements.verifyPIC().should(
            "have.text",
            "MYIC133"
          );

        this.elements.verifyPName().should(
            "have.text",
            "Sheetal C "
        );
        PlainNoteElements.elements.clickPatient().click() 
        cy.wait(500)

        cy.url().should('eq', 'https://'+Env+'-my.biomarking.com/patient/'+PID);
    }
}
//s

