
export class descRecPro{
    elements={
        storeBtnL:()=> cy.get('[to="/store"]'),
        productToClick:()=> cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12.MuiGrid-grid-md-3.css-13ps8n2')
}
    Actions(){
        this.elements.storeBtnL().click()
        this.elements.productToClick().eq('0').click()
    }
    Assertion(){
        cy.get('[aria-controls="dashboard-tabpanel-0"]').should('exist')
        cy.get('.MuiTypography-root.MuiTypography-h2.css-oxn7gb').contains('General Description')
        .next().then((value)=>{
            cy.log(value.text())
            cy.get('.MuiTypography-root.MuiTypography-h2.css-oxn7gb').contains('Recommended Products')
            .should('exist').next().find('.product.MuiBox-root.css-0').each((ele, index)=>{
                cy.log(ele.text())
            })
        })
        
    }
}