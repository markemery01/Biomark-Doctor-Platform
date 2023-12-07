export class search_Patient {
    elements={

        //Functions to search patient data
        searchPatient:()=> cy.wait(2000).get('[data-test-id = "searchPatient"]'),
        openProfile:()=> cy.wait(2000).contains('Taha Imran Biomarkars'),
        openProfileOfPatientWithICNumber:()=> cy.wait(2000).contains('Taha Imran'),
        navigateToHomePage:()=> cy.get('[alt="logo"]'),
        searchPatientWithIcNumber:()=> cy.get('[data-test-id = "searchPatient"]'),
        verifyProfileVisit:()=> cy.contains('Taha').should('exist') 
    }

    
}