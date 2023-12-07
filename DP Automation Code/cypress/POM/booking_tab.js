export class bookings_Tab{
    elements={
        
        //Functions handlig the bookings tab
        navigateToBookingScreen:()=> cy.contains('Bookings'),
        searchBookedPatientName:()=> cy.wait(5000).get('[type="text"]'),
        validateStatus:()=> cy.contains('Pending Patient Arrival').should('exist'),
        navigateToCompletedTab:()=> cy.contains('Completed'),
        verifyBookingExists:()=> cy.contains('Patient Received').should('exist'),
        verifyPastBookingDate:()=> cy.contains('31/10/2023 19:56:00').should('exist')
    }
}