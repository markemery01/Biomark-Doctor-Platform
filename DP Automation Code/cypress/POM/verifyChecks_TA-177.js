

export class verifyChecks
{
    elements=
    {
        VisitStore:()=> cy.get('[style="color: rgb(132, 147, 174);"]').contains('Store'),
        ClickPharmarise:()=> cy.get('[value="Pharmarise"]'),
    }
    Actions()
    {
        this.elements.VisitStore().click()

        this.elements.ClickPharmarise().check().should('have.value', 'Pharmarise')

        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12.MuiGrid-grid-md-3.css-13ps8n2').each((ele, index)=>{
            cy.log(ele.text())
        })
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12.MuiGrid-grid-md-3.css-13ps8n2').eq('0').click()
        cy.get('.MuiTypography-root.MuiTypography-h2.name.css-oxn7gb').contains('Pharmarise').should('exist')
        cy.go('back').wait(3500)
        //Check Categories
        cy.get('#categories').type('Wound Care').get('[value="Wound Care"]')
        .get('#categories-option-0').click()
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12.MuiGrid-grid-md-3.css-13ps8n2').eq('0').click()
        cy.get('.MuiTypography-root.MuiTypography-body1.same.css-ftf3wq')
        .contains('Wound Care').should('exist')
        cy.go('back').wait(3500)
        //Check Active ingredients
        cy.get('#drug_names').type('Aspirin').get('#drug_names-option-0').click()
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12.MuiGrid-grid-md-3.css-13ps8n2').eq('0').click()
    
        }
}