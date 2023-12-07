export class send_reports{
    elements={

        //Functions to send reports to patients
        sendResults:()=> cy.wait(2000).get('[type = "button"]').contains('Resend To Patient'),
        sendResultsToPatients:() => cy.wait(2000).get('[type = "button"]').contains('Send Results'),
        toggleEmail:()=>  cy.wait(2000).get('[type = "radio"]').eq(1),
        editNumber:()=> cy.wait(2000).get('[type = "button"]').contains('Edit'),
        enterNewNumber:()=> cy.get('[type="tel"]'),
        saveNewNumberOrEmail:()=> cy.get('[type = "button"]').contains('Save contact details'),
        editEmail:()=>  cy.wait(2000).get('[type = "button"]').contains('Edit'),
        enterNewEmail:() => cy.get('[type="email"]'),
        assertNotificationMessage:()=> cy.get('.notification-message').should('be.visible')
    
}
}