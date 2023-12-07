export class nav_menuBar{
    elements={
        
        //Functions to handle Nav bar
        openMenu:()=> cy.get('[id="AvatarMenu"]'),
        openPolicies:()=> cy.contains('Policies'),
        visitDataPrivacy:()=> cy.contains('Data Privacy'),
        assertPoliciesPageVisit:()=> cy.url().should('include', '/policies')
    }

}