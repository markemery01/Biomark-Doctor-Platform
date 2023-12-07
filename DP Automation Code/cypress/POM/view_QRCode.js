import { VerifyPendingConnectionView } from "../POM/pending_Connection"
const PendingConnectionElements = new VerifyPendingConnectionView()

export class ViewConnectionQRCode{

    elements = {
        qrCodeBtn:()=> cy.get('[data-testid="QrCodeIcon"]'),
        qrCodePopup:()=> cy.get('.jss38').should('be.visible'), 
        verifyTextOnPopup:()=>cy.get('.jss38 > .MuiTypography-root'),
        qrCodeModalClose:()=> cy.get('#modal-qr-code > .MuiButtonBase-root')
    }

    Actions(){
        PendingConnectionElements.elements.pendingConnectionBtn().click()
        PendingConnectionElements.elements.verifyPendingConnectionPopup().click()
        this.elements.qrCodeBtn().click()

        this.elements.verifyTextOnPopup().should(
            "have.text","Let a patient scan this QR code via the BioMark Patient App to connect to your practice's Doctor Platform account."
        )

        this.elements.qrCodeModalClose().click()
    }
}
//s