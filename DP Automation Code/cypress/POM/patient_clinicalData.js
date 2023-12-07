export class patient_clinicalData {
    elements={
        
        //Functions to handle Clinical Data
        openClicnicalNotesTab:()=> cy.wait(1000).contains('Clinical Notes'),
        openNewNotes:()=> cy.wait(1000).contains('New Note'),
        openNotesDropdown:()=> cy.wait(2000).get('[aria-haspopup="listbox"]'),
        selectPlainNotesOption:()=> cy.wait(1000).contains('Plain Notes'),
        addNotesTitle:()=> cy.wait(1000).get('[placeholder="Title"]'),
        addDescription:()=> cy.wait(1000).get('[aria-label="empty textarea"]'),
        deleteAddedNotes:()=> cy.wait(1000).contains('Delete'),
        confirmDeletion:()=> cy.contains('Confirm'),
        assertAddedNotes:(title)=> cy.wait(1000).contains(title).should('exist'),
        addDetails:()=> cy.get('[aria-label="empty textarea"]'),
        searchNotes:()=> cy.get('[placeholder="Search Notes"]'),
        chooseFemaleNotes:()=> cy.get('[type="button"]').contains('Female body'),
        assertNoNotesDataExists:()=> cy.contains('No Notes Yet').should('exist')

    }
}