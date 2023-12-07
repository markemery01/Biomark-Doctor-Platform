export class remove_lab_item
{
    elements=
    {   //Changed
        VisitStore:()=> cy.get('[style="color: rgb(132, 147, 174);"]').contains('Store'),
        //LabConsBtn:()=> cy.get('#dashboard-tab-1').contains('Lab Consumables'),
        AddToCart:()=> cy.get('[tabindex="0"]').contains('Add To Cart'),
        OpenCart:()=> cy.get('[data-testid="ShoppingCartIcon"]'),
        Remove_Item:()=> cy.get('[style="display: flex; align-items: center; flex-direction: column;"] > .MuiButton-contained'),
    }

    Actions()
    {
        this.elements.VisitStore().click()
       // this.elements.LabConsBtn().click()
        this.elements.AddToCart().click()
        this.elements.OpenCart().click()
        this.elements.Remove_Item().click()
    }

    Assertion()
    {
        cy.contains('Your cart is empty').invoke('text').then((Verify_Text)=>
        {
            cy.log(Verify_Text)
            expect(Verify_Text).to.eq('Your cart is empty')
        })
       
    }
    
}
