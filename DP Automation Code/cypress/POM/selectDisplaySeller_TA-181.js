

export class selectDisplaySeller{
    elements={
        storeBtnL:()=> cy.get('[to="/store"]'),
        selectSellerL:()=>cy.get('.MuiFormGroup-root.css-1whmnw9')
       
    }
    Actions(){
        this.elements.storeBtnL().click()
        this.elements.selectSellerL().each((ele, index)=>{
            if(ele.text().includes('BIG Pharmacy Healthcare Sdn. Bhd.'))
            cy.wrap(ele).click()
        })
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12.MuiGrid-grid-md-3.css-13ps8n2').eq('0').click()
        
    }
    Assertion(){
        cy.get('.MuiTypography-root.MuiTypography-h2.name.css-oxn7gb')
        .contains('BIG Pharmacy Healthcare Sdn. Bhd.').should('exist')
    }
}