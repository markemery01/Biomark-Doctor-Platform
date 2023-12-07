import { patient_clinicalData } from "../POM/patient_clinicalData";
const ClinicalData = new patient_clinicalData()

const title = 'Test Automation'
const description = 'Hello Automation QA'
const IC = 'S4099998K'
export class VerifyPlainNote{
    elements = {
        searchPatient:()=> cy.wait(2000).get('[data-test-id = "searchPatient"]'),
        clickPatient:() =>cy.wait(2000).get('.css-9o7t33'),
        searchNote:() => cy.get('[name="search"]'),
        DeleteBtn:()=> cy.contains('Delete'),
        ConfirmBtn:()=> cy.contains('Confirm'),
        clickOnNote:()=> cy.wait(1000).get('[role="button"]').contains(title),
        assertDeletedNotes:()=> cy.contains('Test Automation').should('not.exist')
    }

    Actions() {
        this.elements.searchPatient().click();
        cy.wait(1000)
        this.elements.searchPatient().type(IC).type('{enter}')
        cy.wait(1000)
        this.elements.clickPatient().click();
        ClinicalData.elements.openClicnicalNotesTab().click()
        ClinicalData.elements.openNewNotes().click()
        ClinicalData.elements.openNotesDropdown().click()
        ClinicalData.elements.selectPlainNotesOption().click()
        ClinicalData.elements.addNotesTitle().type(title)
        ClinicalData.elements.addDescription().type(description)
        this.elements.searchNote().type(title)
        this.elements.clickOnNote().click()
        //ClinicalData.elements.deleteAddedNotes().click()
        //ClinicalData.elements.confirmDeletion().click()
        this.elements.DeleteBtn().click()
        this.elements.ConfirmBtn().click()   
        cy.reload()
        cy.wait(500)
        ClinicalData.elements.openClicnicalNotesTab().click()
        cy.wait(2000)
        this.elements.assertDeletedNotes()
    }
}