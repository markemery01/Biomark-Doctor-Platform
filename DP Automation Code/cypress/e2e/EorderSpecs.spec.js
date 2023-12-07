import devFixtureData from "../fixtures/dev/patientTestData.dev"
import uatFixtureData from  "../fixtures/uat/patientTestData.uat"
import { faker } from '@faker-js/faker';
import { create_eorder } from "../POM/create_eorder";
import { search_Patient } from "../POM/search_Patient";
import { VerifyPmCareNote } from "../POM/pmCare_Note_TA-449";
import { eOrderPatientProfile } from "../POM/eorder_patientProfile_TA_54";


const Eorder = new create_eorder()
const Search_Patient = new search_Patient()
const fakeDescription  = faker.lorem.words()
const VerifyPMCareNote = new VerifyPmCareNote()
const eorder_PatientProfile = new eOrderPatientProfile()



//Test data for DEV and UAT Env
let fixtureData
  if (Cypress.env('environment') === 'dev'){
      fixtureData = devFixtureData
  }
  else{
    fixtureData = uatFixtureData
  }


describe ('This file will contain autoamted test cases for DP FE related to Eorder Flows',()=>{


    
    
    beforeEach('Visiting baseUrl', ()=>{
        cy.visit("");
        cy.loginToApplication(fixtureData.primaryAccountUsername, fixtureData.password);
    })

    it('Create eorder for existing patients when sample is not collected with random fasting', ()=>{
        

        //Create eorders for existing patients
        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.selectPatient().click()
        Eorder.elements.verifyProfile().click()
        Eorder.elements.continueToTestSelections().click({force:true})
        Eorder.elements.selectTests(fixtureData.select_Test)
        Eorder.elements.continueToSampleCollection().click({force:true})
        Eorder.elements.fillUpSpecimanListForDelayedCollection().click({multiple:true})
        Eorder.elements.addingNotes().type(fakeDescription)
        Eorder.elements.selectFastingPatient().click()
        Eorder.elements.selectFastingOptions().click()
        Eorder.elements.navigateToOrderConfirmation().click()
        Eorder.elements.validateOrder().click()
        Eorder.elements.confirmOrder().eq(13).click()
        
    
        // assert that new order was created sucessfully
        Eorder.elements.assertConfirmationPage()
    
    })

    it('Create eorder for existing patients when sample is collected with fasting', ()=>{
        

        //Create eorders for existing patients
        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.selectPatient().click()
        Eorder.elements.verifyProfile().click()
        Eorder.elements.continueToTestSelections().click({force:true})
        Eorder.elements.selectTests(fixtureData.select_Test)
        Eorder.elements.continueToSampleCollection().click({force:true})
        Eorder.elements.fillUpSpecimanListForDelayedCollection().click({multiple:true})
        Eorder.elements.addingNotes().type(fakeDescription)
        Eorder.elements.selectFastingPatient().click()
        Eorder.elements.selectFastingOptions().click()
        Eorder.elements.navigateToOrderConfirmation().click()
        Eorder.elements.validateOrder().click()
        Eorder.elements.confirmOrder().eq(13).click()
        

        //assert that new order was created sucessfully
        Eorder.elements.assertConfirmationPage()
    })

    it('Create eorder for existing patients when sample is not collected with fasting', ()=>{
        

        //Create eorders for existing patients
        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.selectPatient().click()
        Eorder.elements.verifyProfile().click()
        Eorder.elements.continueToTestSelections().click()
        Eorder.elements.selectTests(fixtureData.select_Test)
        Eorder.elements.continueToSampleCollection().click({force:true})
        Eorder.elements.fillUpSpecimanListForDelayedCollection().click({multiple:true})
        Eorder.elements.addingNotes().type(fakeDescription)
        Eorder.elements.selectFastingPatient().click()
        Eorder.elements.selectFasting().click()
        Eorder.elements.navigateToOrderConfirmation().click()
        Eorder.elements.validateOrder().click()
        Eorder.elements.confirmOrder().eq(13).click()
        

        //assert that new order was created sucessfully

        Eorder.elements.assertConfirmationPage()

    })

    it('Create eorder for existing patients when sample is collected with random fasting', ()=>{
        

        //Create eorders for existing patients
        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.selectPatient().click()
        Eorder.elements.verifyProfile().click()
        Eorder.elements.continueToTestSelections().click({force:true})
        Eorder.elements.selectTests(fixtureData.select_Test)
        Eorder.elements.continueToSampleCollection().click({force:true})
        Eorder.elements.fillUpSpecimanListForDelayedCollection().click({multiple:true})
        Eorder.elements.addingNotes().type(fakeDescription)
        Eorder.elements.selectFastingPatient().click()
        Eorder.elements.selectFastingOptions().click()
        Eorder.elements.navigateToOrderConfirmation().click()
        Eorder.elements.validateOrder().click()
        Eorder.elements.confirmOrder().eq(13).click()
        

        //assert that new order was created sucessfully
        Eorder.elements.assertConfirmationPage()

    })

    it('Verify a user can create eorder for a patient by using injection icon on homepage',()=>{

        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.clickInjectionIconFromHomepage(fixtureData.ID_number_for_eorder)
        Eorder.elements.clickEorderButton().click()
        
        Eorder.elements.selectTests(fixtureData.select_Test)
        Eorder.elements.continueToSampleCollection().click({force:true})
        Eorder.elements.fillUpSpecimanListForDelayedCollection().click({multiple:true})
        Eorder.elements.addingNotes().type(fakeDescription)
        Eorder.elements.selectFastingPatient().click()
        Eorder.elements.selectFasting().click()
        Eorder.elements.navigateToOrderConfirmation().click()
        Eorder.elements.validateOrder().click()
        Eorder.elements.confirmOrder().eq(13).click()
        

        //assert that new order was created sucessfully

        Eorder.elements.assertConfirmationPage()
    })

    it('View order from Booking History with Delivered status', ()=>{


        //View mot recent order booking from History page

        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.navigateToHistoryPage().click()
        Eorder.elements.findAnyStatusEorder().type(fixtureData.Eorder_delivered_status_ID).type('{enter}')

        //assert that the order was viewed successfully
        Eorder.elements.assertOrderStatus(fixtureData.Delivered_status)
        Eorder.elements.assertOrderViewedSuccessfully(fixtureData.delivered_status_patient_name)
    })

    it('View order from Booking History with Pending status', ()=>{


        //View mot recent order booking from History page

        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.navigateToHistoryPage().click()
        Eorder.elements.findAnyStatusEorder().type(fixtureData.Eorder_pending_status_ID).type('{enter}')

        //assert that the order was viewed successfully
        Eorder.elements.assertOrderViewedSuccessfully(fixtureData.patient_name)
        Eorder.elements.assertOrderStatus(fixtureData.Pending_status)
    })
    
    it('View order from Booking History with Processing status', ()=>{


        //View mot recent order booking from History page

        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.navigateToHistoryPage().click()
        Eorder.elements.findAnyStatusEorder().type(fixtureData.Eorder_processing_status_ID).type('{enter}')

        //assert that the order was viewed successfully
        Eorder.elements.assertOrderStatus(fixtureData.Processing_status)
    })

    it('View order from Booking History with Assigned status', ()=>{


        //View most recent order booking from History page

        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.navigateToHistoryPage().click()
        Eorder.elements.findAnyStatusEorder().type(fixtureData.Eorder_assigned_status_ID).type('{enter}')

        //assert that the order was viewed successfully
        Eorder.elements.assertOrderViewedSuccessfully(fixtureData.Eorder_assigned_status_ID)
        Eorder.elements.assertOrderStatus(fixtureData.Assigned_status)
    })

    it('Verify If a user can view Details of the order in Order History by clicking on View Order Button',()=>{


        Eorder.elements.navigateToEorderPage().click()
        Eorder.elements.navigateToHistoryPage().click()
        Eorder.elements.findAnyStatusEorder().type(fixtureData.Eorder_assigned_status_ID).type('{enter}')
        Eorder.elements.viewAnyStatusEorder().click()

        //assert that order is viewable by clicking on View order button
        Eorder.elements.assertOrderViewedSuccessfully(fixtureData.IC_number_to_verify)
        Eorder.elements.assertOrderViewedSuccessfully(fixtureData.Name_of_patient)
    })

    //s
    it('Verify if user is able to view and close PM Care Note',()=>{

        VerifyPMCareNote.Actions(fixtureData.PMCarePatientID, fixtureData.PMCarePatientName, fixtureData.Env)
    })

    it('Verify a user can create eorder from the profile page', ()=>
    {

        eorder_PatientProfile.Actions()
        eorder_PatientProfile.Assertion()
    })

})
