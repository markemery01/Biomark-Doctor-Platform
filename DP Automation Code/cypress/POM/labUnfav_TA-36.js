export class labUnFavItem{
   
    elements=
    {   //Changed
        storeBtnL:()=> cy.get('[to="/store"]'),
        //labComsumableBtnL:()=> cy.get('#dashboard-tab-1').contains('Lab Consumables'),
        itemToFavL:()=> cy.get(':nth-child(2) > .MuiGrid-grid-xs-2').find('#favorite'),
        
    }
    Actions()
    {
            this.elements.storeBtnL().click()
            //this.elements.labComsumableBtnL().click()
            this.elements.itemToFavL().click()
            cy.wait(2000)
            this.elements.itemToFavL().click()
    }

    Assertion()
    {
        cy.get('[style="display: flex; align-items: center;"]')
        .contains('Favorites (0)').should('exist')
    }
}