export class AddLabItemToCart
{
    elements=
    {   //Changed
        storeBtnL:()=> cy.get('[to="/store"]'),
        //labComsumableBtnL:()=> cy.get('#dashboard-tab-1').contains('Lab Consumables'),
        SearchLabItem:()=> cy.get('[id="consumable-search"]'),
        AddToCartBtn:()=> cy.contains('Add To Cart'),
        CartBtn:()=> cy.get('[data-testid="ShoppingCartIcon"]')

    }

    actions()
    {
        this.elements.storeBtnL().click()
        //this.elements.labComsumableBtnL().click()
        this.elements.SearchLabItem().type('Ice Pack / Thermafreeze')
        this.elements.AddToCartBtn().wait(3000).click()
        this.elements.CartBtn().click()

    }

    assertions()
    {
        cy.contains('Ice Pack / Thermafreeze').should('exist')

        //Reset Cart
        cy.contains('Remove').click()
    }
}