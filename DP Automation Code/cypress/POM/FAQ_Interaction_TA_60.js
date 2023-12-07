export class FAQ_Interaction{
    elements={
        bookings:()=> cy.get('[to="/bookings"]'),
        FAQ_Btn:()=> cy.get('[type="button"]').contains('FAQ'),
        DropDown:()=> cy.get('[role="button"]'),
        FAQ_Title:()=> cy.get('.MuiTypography-root.MuiTypography-h5.css-96c2ay'),
    }
    Actions(){
        this.elements.bookings().click()
        this.elements.FAQ_Btn().click()

        this.elements.FAQ_Title().should('have.text', 'Frequently Asked Questions')
        //1st
        this.elements.DropDown().eq(0).click().should('be.visible').first().next()
        .should('include.text', 'ways a patient may make a booking')
        this.elements.DropDown().eq(0).click()
        //2nd
        this.elements.DropDown().eq(1).click().should('be.visible').first().next()
        .should('include.text', 'To acknowledge that you’ve received a patient, follow the steps below')
        this.elements.DropDown().eq(1).click()
        //3rd
        this.elements.DropDown().eq(2).click().should('be.visible').first().next()
        .should('include.text', 'Payments will be made monthly via Bank transfers')
        }
}