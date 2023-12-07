const IC = "S9699999G"
export class viewClinicalNotes
{
    elements=
    {
        SearchIC:()=> cy.get('[data-test-id = "searchPatient"]'),
        ClickSearch:()=> cy.contains('Search'),
        SelectIC:()=> cy.contains('S9699999G'),
        ClickClinicalNotes:()=> cy.contains('Clinical Notes'),
        SearchNotes:()=> cy.get('[name="search"]'),
        ClickOnNote:()=> cy.get('[role="button"]').contains('Test Automation Note')
    }

    actions()
    {   //Changed
        this.elements.SearchIC().type(IC)
        this.elements.ClickSearch().click()
        this.elements.SelectIC().click()
        this.elements.ClickClinicalNotes().click()
        this.elements.SearchNotes().type('Test Automation Note')
        this.elements.ClickOnNote().click()
    }

    assertions()
    {
        cy.wait(4000).get('[aria-haspopup="listbox"]').then(($element) => {
            const text = $element.text();
            expect(text).to.equal('Plain Notes');
          });

          cy.wait(4000).get('[aria-label="empty textarea"]').then(($element) => {
            const text = $element.text();
            expect(text).to.equal('Test Data Value, Please Do Not Delete This Note');
          });

          //cy.wait(2000).get('[aria-label="empty textarea"]').should('not.have.value', 'Test Data Value, Please Do Not Delete This Note')
    }
}