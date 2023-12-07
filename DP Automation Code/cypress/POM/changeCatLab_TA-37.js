

export class changeCatLab{
    elements={
        //Changed
        //labComsumableBtnL:()=> cy.get('#dashboard-tab-1').contains('Lab Consumables'),
        categoriesBtn:()=> cy.contains('Categories'),
        categoriesSelect:()=> cy.get('[type="checkbox"]'),
        categorySelectBtn:()=> cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    
    }
    Actions(){
       // this.elements.labComsumableBtnL().click()
        this.elements.categoriesBtn().click()
        this.elements.categoriesSelect().uncheck()
        this.elements.categorySelectBtn().check()
        
        cy.get('[style="padding-right: 40px;"]')
        .should('exist')
        .each((ele, index, list)=>{
            cy.log(ele.text())
        })
        this.elements.categorySelectBtn().uncheck()
    }
}