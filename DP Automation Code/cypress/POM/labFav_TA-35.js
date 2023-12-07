export class labFavItem{
   
    elements={
        //Changed
        storeBtnL:()=> cy.get('[to="/store"]'),
        //labComsumableBtnL:()=> cy.get('#dashboard-tab-1').contains('Lab Consumables'),
        itemToFavL:()=> cy.get(':nth-child(2) > .MuiGrid-grid-xs-2').find('#favorite'),
        }
        Actions(){
            this.elements.storeBtnL().click()
            //this.elements.labComsumableBtnL().click()
            this.elements.itemToFavL().click()
        }
    
    Assertion(){
        cy.get('[style="display: flex; align-items: center;"]')
        .contains('Favorites (1)').should('exist')
    }
    reset(){
        this.elements.itemToFavL().click()
    }
}