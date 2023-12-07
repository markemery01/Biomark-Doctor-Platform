
import { create_eorder } from "../POM/create_eorder";
import { faker } from '@faker-js/faker';
const fakeDescription  = faker.lorem.words()

const Eorder = new create_eorder()
const select_test_y = "GST3"
import fixture from "../fixtures/uat/patientTestData.uat.json"

export class eOrderPatientProfile{
    elements={
        //Changed
        searchPatient:()=> cy.get('[data-test-id = "searchPatient"]'),
        searchBtnL: ()=> cy.get('[type = "submit"]'),
        selectPatient: ()=> cy.get('.MuiTableContainer-root.css-kge0eu').children(),
        createOrder: ()=> cy.contains('Create Order'),
        createEorder: ()=> cy.get('[type="button"]').contains('Create eOrder'),
        confirmeOrder: ()=> cy.get('[type="button"]').last(),
        searchTest:()=> cy.get('[name="search"]'),
        pressEnter:()=> cy.get('[type="button"]').contains('Search'),
        selectTests: () =>
            cy.get('[data-testid="AddCircleIcon"]')
    }
    Actions(){
       this.elements.searchPatient().type(fixture.Youmsaic)
       this.elements.searchBtnL().click()
       this.elements.selectPatient()
       .last()
       .contains(fixture.Youmsaic).click()
       this.elements.createOrder().click()
       this.elements.createEorder().click()
       this.elements.searchTest().type(select_test_y)
       this.elements.pressEnter().click({force:true})
       this.elements.selectTests().eq(0).click()
       Eorder.elements.continueToSampleCollection().click()
       Eorder.elements.fillUpSpecimanList().click({multiple:true})
       Eorder.elements.addingNotes().type(fakeDescription)
       Eorder.elements.selectFastingPatient().click()
       Eorder.elements.selectFastingOptions().click()
       Eorder.elements.navigateToOrderConfirmation().click()
       Eorder.elements.validateOrder().click()
       this.elements.confirmeOrder().click()

    }
    Assertion(){
        cy.wait(5000)
        cy.get('[role="dialog"]').children()
        .should('include.text','E-Order Request Sent')
    }
}
