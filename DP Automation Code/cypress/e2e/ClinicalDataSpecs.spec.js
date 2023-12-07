import devFixtureData from "../fixtures/dev/patientTestData.dev"
import uatFixtureData from  "../fixtures/uat/patientTestData.uat"
import { faker } from '@faker-js/faker';
import { view_Records } from "../POM/view_records";
import { search_Patient } from "../POM/search_Patient";
import { create_eorder } from "../POM/create_eorder";
import { patient_clinicalData } from "../POM/patient_clinicalData";
import { send_reports } from "../POM/send_reports";
import { VerifyPlainNote } from "../POM/plain_note_TA-542";
import { VerifyEmailAndNumberUpdate } from "../POM/emailMobileNo_Update";
import { AddBloodPressure } from "../POM/add_BP_TA-70";
import { updateBMI } from "../POM/update_BMI_TA_71";
import { AddLabItemToCart } from "../POM/searchAdd_labItemTo_cart_TA-33";
import { viewClinicalNotes } from "../POM/clinical_notes_TA-55";


const ClinicalData = new patient_clinicalData()
const Eorder = new create_eorder()
const Search_Patient = new search_Patient()
const View_Records = new view_Records()
const Send_Reports = new send_reports()
const PlainNote = new VerifyPlainNote()
const VerifyEmailAndNoUpdate = new VerifyEmailAndNumberUpdate()
const bloodPressure = new AddBloodPressure()
const update_BMI = new updateBMI()
const LabItem = new AddLabItemToCart()
const ClinicalNotes = new viewClinicalNotes()

const fakeTitle = faker.lorem.words()
const fakeDescription  = faker.lorem.words()
const fakeSubjective = faker.lorem.words()
const fakeObjective = faker.lorem.words()
const fakeAssesment = faker.lorem.words()
const fakePlan = faker.lorem.words()
const fakeRemarks = faker.lorem.words()

//Test data for DEV and UAT Env
let fixtureData
  if (Cypress.env('environment') === 'dev'){
      fixtureData = devFixtureData
  }
  else{
    fixtureData = uatFixtureData
  }


describe ('This file will contain autoamted test cases for DP FE related to Lab Data, Clinical Data, Notes, Trends, BMI data updations',()=>{
    
    beforeEach('Visiting baseUrl', ()=>{
        cy.visit("");
        cy.loginToApplication(fixtureData.primaryAccountUsername, fixtureData.password);
    })

    it('Add plain clicnical notes for user', ()=>{


        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.selectPatient().click()
        ClinicalData.elements.openClicnicalNotesTab().click()
        ClinicalData.elements.openNewNotes().click()
        ClinicalData.elements.openNotesDropdown().click()
        ClinicalData.elements.selectPlainNotesOption().click({force:true})
        ClinicalData.elements.addNotesTitle().type(fakeTitle)
        ClinicalData.elements.addDescription().type(fakeDescription)

        //assert that new note was created sucessfully
        ClinicalData.elements.assertAddedNotes(fakeTitle)

    })

    it('Verify that user can view Health Summary Section of a Patient and verify the imformation', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.patient_profile).type('{enter}')
        View_Records.elements.selectPatient(fixtureData.patient_profile_IC_number).click()
        View_Records.elements.navigateToHealthSummmaryScreen().click()
        View_Records.elements.verifyBloodPressureScore()
        View_Records.elements.verifySmoking()
        View_Records.elements.verifyDrinking()
        View_Records.elements.verifyStress()
    })

    it('Verify that user can view Health Summary Section of a Patient and add BP data along with Body weight data', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.patient_profile).type('{enter}')
        View_Records.elements.selectPatient(fixtureData.patient_profile_IC_number).click()
        View_Records.elements.navigateToMedicalHistoryScreen().click()
        View_Records.elements.openBloodSugarUnitDropdown().click()
        View_Records.elements.selectUnit().click()
        View_Records.elements.enterBPValue().eq(0).type(fixtureData.Systolic_Value)
        View_Records.elements.enterBPValue().eq(1).type(fixtureData.Dystolic_Value)
        View_Records.elements.updateBP().click()
        Send_Reports.elements.assertNotificationMessage()
        View_Records.elements.enterBPValue().eq(2).type(fixtureData.Weight)
        View_Records.elements.enterBPValue().eq(3).type(fixtureData.Height)
        View_Records.elements.updateBMI().click()
        Send_Reports.elements.assertNotificationMessage()
        View_Records.elements.verifyMedications()
    })

    it('Verify a user is a Hive App user', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.patient_profile).type('{enter}')
        View_Records.elements.selectPatient(fixtureData.patient_profile_IC_number).click()
        View_Records.elements.hiveIcon().click()
        View_Records.elements.verifyName()

    })

    it('Verify that user can view data from vitals on Patient health Summary screen', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_vitals_data).type('{enter}')
        Eorder.elements.selectPatient().click()
        View_Records.elements.navigateToHealthSummmaryScreen().click()
        View_Records.elements.selctSteps().click()
        View_Records.elements.selectCalories().click()
        View_Records.elements.selectDistance().click()
    })

    it('Verify if user can view trends', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_vitals_data).type('{enter}')
        Eorder.elements.selectPatient().click()
        View_Records.elements.navigateToTrends().click()
        View_Records.elements.viewRenalFunction().click()
        View_Records.elements.assertSodium()
        View_Records.elements.viewFullBloodExamination().click()
        View_Records.elements.assertMonocytes()
        View_Records.elements.viewMineralAndVitaminStudies().click()
        View_Records.elements.assertSerumCalcium()
    })

    it('Verify no pdf message exists', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_no_pdf).type('{enter}')
        Eorder.elements.selectPatient().click()
        View_Records.elements.openPDF().click()
        View_Records.elements.assertNoPdfExists()
    })

    it('Verify that user can select and view Secondary PDF', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_secondary_pdf).type('{enter}')
        Eorder.elements.selectPatient().click()
        View_Records.elements.openPDF().click()
        View_Records.elements.openPdfMenu().click()
        View_Records.elements.selectSecondaryPDF().click()
        View_Records.elements.assertSecondaryPdfExists()
    })

    it('Verify user can add clinical SOAP note for male',()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.selectPatient().click()
        ClinicalData.elements.openClicnicalNotesTab().click()
        ClinicalData.elements.openNewNotes().click()
        ClinicalData.elements.addNotesTitle().type(fakeTitle)
        ClinicalData.elements.addDetails().eq(0).type(fakeSubjective)
        ClinicalData.elements.addDetails().eq(1).type(fakeObjective)
        ClinicalData.elements.addDetails().eq(2).type(fakeAssesment)
        ClinicalData.elements.addDetails().eq(3).type(fakePlan)
        ClinicalData.elements.addDetails().eq(4).type(fakeRemarks)

    })

    it('Verify user can add clinical SOAP note for female and delete it after searching',()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.selectPatient().click()
        ClinicalData.elements.openClicnicalNotesTab().click()
        ClinicalData.elements.openNewNotes().click()
        ClinicalData.elements.chooseFemaleNotes().click()
        ClinicalData.elements.addNotesTitle().type(fakeTitle)
        ClinicalData.elements.addDetails().eq(0).type(fakeSubjective)
        ClinicalData.elements.addDetails().eq(1).type(fakeObjective)
        ClinicalData.elements.addDetails().eq(2).type(fakeAssesment)
        ClinicalData.elements.addDetails().eq(3).type(fakePlan)
        ClinicalData.elements.addDetails().eq(4).type(fakeRemarks)
        ClinicalData.elements.searchNotes().type(fakeTitle)
        ClinicalData.elements.deleteAddedNotes().click({force:true})
        ClinicalData.elements.confirmDeletion().click()

    })

    it('Verify user can add clinical SOAP note for male and delete it after searching',()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_eorder).type('{enter}')
        Eorder.elements.selectPatient().click()
        ClinicalData.elements.openClicnicalNotesTab().click()
        ClinicalData.elements.openNewNotes().click()
        ClinicalData.elements.addNotesTitle().type(fakeTitle)
        ClinicalData.elements.addDetails().eq(0).type(fakeSubjective)
        ClinicalData.elements.addDetails().eq(1).type(fakeObjective)
        ClinicalData.elements.addDetails().eq(2).type(fakeAssesment)
        ClinicalData.elements.addDetails().eq(3).type(fakePlan)
        ClinicalData.elements.addDetails().eq(4).type(fakeRemarks)
        ClinicalData.elements.searchNotes().type(fakeTitle)
        ClinicalData.elements.deleteAddedNotes().click({force:true})
        ClinicalData.elements.confirmDeletion().click()

    })

    it('Verify if user can check that no lab data exists for a user', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_no_data_verification).type('{enter}')
        Eorder.elements.selectPatient().click()
        View_Records.elements.asserNoLabDataExists()
    })

    it('Verify if user can check that no trends data exists for a user', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_no_data_verification).type('{enter}')
        Eorder.elements.selectPatient().click()
        View_Records.elements.navigateToTrends().click()
        View_Records.elements.assertNoTrendsDataExists()
    })

    it('Verify if user can check that no clinical notes data exists for a user', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_for_no_data_verification).type('{enter}')
        Eorder.elements.selectPatient().click()
        ClinicalData.elements.openClicnicalNotesTab().click()
        ClinicalData.elements.assertNoNotesDataExists()
    })

    //s
    it('Verify if user can Search a Plain note and delete it',()=>{

        PlainNote.Actions()
    })

     //s
    it('Verify if user is able to edit details of Email and Mobile number to send reports to patients',()=>{

        VerifyEmailAndNoUpdate.Actions()
    })
    
    it('Verify that a user can add BP values', ()=>{


        bloodPressure.actions()
        bloodPressure.assertions()
    })

    it('Verify that a user can update BMI data', ()=>{
        update_BMI.Actions()
        update_BMI.NegativeActions()
    })

    it('Verify that a user should be able to search Lab Item and Add it to Cart', ()=>{
        
        LabItem.actions()
        LabItem.assertions()
        
    })

    
    it('Verify a user can view clinical notes',()=>{

        ClinicalNotes.actions()
        ClinicalNotes.assertions()
    })

})