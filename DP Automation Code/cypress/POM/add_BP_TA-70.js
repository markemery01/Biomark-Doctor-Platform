const IC = "S9699999G"
const min = 130
const max = 170
const randomValue = Math.floor(Math.random() * (max - min + 1)) + min
const min1 = 90
const max1 = 120
const randomValue1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1
export class AddBloodPressure
{
    elements=
    {   //Changed
        SearchIC:()=> cy.get('[data-test-id = "searchPatient"]'),
        ClickSearch:()=> cy.contains('Search'),
        SelectIC:()=> cy.contains('S9699999G'),
        MedicalHistory:()=> cy.contains("Medical History"),
        AddSystolic:()=> cy.get('[type="number"]').eq(0),
        AddDiastolic:()=> cy.get('[type="number"]').eq(1),
        UpdateBPBtn:()=> cy.contains('Update BP')
    }

    actions()
    {
        this.elements.SearchIC().type(IC)
        this.elements.ClickSearch().click().click()
        this.elements.SelectIC().click()
        this.elements.MedicalHistory().click()
        this.elements.AddSystolic().type(randomValue)
        this.elements.AddDiastolic().type(randomValue1)
        this.elements.UpdateBPBtn().click()

    }

    assertions()
    {
        cy.get('.notification').find('.message').then(($element) => {
            const text = $element.text();
            expect(text).to.equal('BP data added successfully');
          });
    }
}