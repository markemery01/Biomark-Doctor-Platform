
export class VerifyPendingConnectionView{
    elements = {
        pendingConnectionBtn:()=> cy.get('#pending-connections-selected').should('be.visible'),
        verifyPendingConnectionPopup:()=> cy.get('.connections'),
        verifyFirstConnection:()=> cy.get('.connections > :nth-child(1)'),
        clickFirstConnection:()=> cy.get('.connections > :nth-child(1) > .MuiButtonBase-root'),
        verifyConnectPopup:()=> cy.get('#modal-qr-matched-patient > .MuiTypography-h2')
    }

    Actions(){
        this.elements.pendingConnectionBtn().click()
        this.elements.verifyPendingConnectionPopup().should('be.visible')
        this.elements.verifyFirstConnection().should('be.visible')
        this.elements.clickFirstConnection().click()
        this.elements.verifyConnectPopup().should("have.text","Matched Patient Found")
    }
}
//s