export class create_eorder{
    elements={

        //Functions to create eorders for users
        navigateToEorderPage:()=> cy.contains('Orders'),
        searchPatient:()=> cy.get('[name="search"]'),
        selectPatient:()=> cy.wait(5000).contains('Taha'),
        verifyProfile:()=> cy.get('[type = "submit"]').eq(1),
        continueToTestSelections:()=> cy.wait(1000).contains('Continue'),
        selectTests: (select_Test) => {
            cy.contains('td', select_Test)
              .siblings('td')
              .find('[data-testid="AddCircleIcon"]')
              .click();
          },
        continueToSampleCollection:()=> cy.contains('Continue'),
        fillUpSpecimanList:()=> cy.get('[value="collected"]'),
        fillUpSpecimanListForDelayedCollection:()=> cy.get('[value="follow_up"]'),
        addingNotes:()=> cy.get('[aria-label="notes"]'),
        addMensturalCycleInformation:()=> cy.get('[id="mui-222"]'),
        addEDDInformation:()=> cy.get('[id="mui-223"]'),
        addUltrasoundInformation:()=> cy.get('[id="mui-224"]'),
        selectDropdownOptions:()=> cy.contains('Please Select'),
        selectFirstOption:()=> cy.contains('Yes'),
        selectSecondOption:()=> cy.contains('No'),
        selectFastingPatient:()=> cy.get('[aria-haspopup="listbox"]'),
        selectFastingOptions:()=> cy.contains('Random'),
        selectFasting:()=> cy.contains('Fasting'),
        navigateToOrderConfirmation:()=> cy.contains('Continue'),
        validateOrder:()=> cy.get('[type = "submit"]').eq(1),
        confirmOrder:()=> cy.contains('Confirm').get('[type="button"]'),
        assertConfirmationPage:()=>  cy.url().should('include', '/confirmation'),

        //History page to view order history

        navigateToHistoryPage:()=> cy.contains('Order History'),
        findAnyStatusEorder:()=> cy.get('[type="text"]'),
        viewAnyStatusEorder:()=> cy.contains('View Order'),
        assertOrderViewedSuccessfully:(patient_name)=> cy.contains(patient_name).should('exist'),
        assertOrderStatus:(delivered_status)=> cy.contains(delivered_status).should('exist'),
        clickInjectionIconFromHomepage:(ID_number_for_eorder)=> {
            cy.wait(5000)
              .contains('td', ID_number_for_eorder)
              .siblings('td')
              .find('[alt="order"]')
              .click();
          },
        clickEorderButton:()=> cy.get('[type="button"]').contains('Create eOrder')
    }
}