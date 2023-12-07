import { VerifyPlainNote } from "./plain_note_TA-542";
const PlainNoteElements = new VerifyPlainNote();

const ICNumber = "MYIC133"

export class VerifySearchWithICNo{
    elements = {
        verifyPIC :() => cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)').should('be.visible')
    }

    Actions(){
        PlainNoteElements.elements.searchPatient().click()
        PlainNoteElements.elements.searchPatient().type(ICNumber).type('{enter}')

        this.elements.verifyPIC().should(
            "have.text", ICNumber
        );

        PlainNoteElements.elements.clickPatient().click() 
        cy.wait(500)
    }
}