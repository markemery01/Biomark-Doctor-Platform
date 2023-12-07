

export class changeViewStore{
    elements={
        listViewBtn:()=> cy.get('[data-testid="ListIcon"]'),
        gridViewBtn:()=> cy.get(' [data-testid="GridViewIcon"]'),

    }
    Actions(){
    
        this.elements.listViewBtn().click()
      
            //List Assertion
            cy.get('.MuiTypography-root.MuiTypography-h4.css-z6t831').children().should('exist')
            .each((ele, index, list)=>{
                cy.log(ele.text())
                
            })
        this.elements.gridViewBtn().click()
            //Grid Assertion
            cy.get('.MuiBox-root.css-542elh').children().should('exist')
            .each((ele, index, list)=>{
                cy.log(ele.text())
            })
    }
    
    }
