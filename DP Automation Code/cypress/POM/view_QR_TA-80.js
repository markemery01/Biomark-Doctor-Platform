export class SettingsQR
{
    elements=
    {
        ProfileBtn:()=> cy.get('[id="AvatarMenu"]'),
        SettingsBtn:()=> cy.get('[data-testid="SettingsIcon"]'),
        QrBtn:()=> cy.contains('QR Code')
    }

    actions()
    {
        this.elements.ProfileBtn().click()
        this.elements.SettingsBtn().click()
        this.elements.QrBtn().click()
    }

    assertions()
    {
        cy.contains('QR Code').should('exist')
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6.MuiGrid-grid-lg-6.css-1qkgjdf').find('[xmlns="http://www.w3.org/2000/svg"]').eq(0).should('exist')
    }
}