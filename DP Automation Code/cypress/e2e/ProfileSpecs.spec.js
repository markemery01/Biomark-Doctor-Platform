import devFixtureData from "../fixtures/dev/patientTestData.dev"
import uatFixtureData from  "../fixtures/uat/patientTestData.uat"
import { faker } from '@faker-js/faker';
import { add_Patient } from "../POM/add_Patient";
import { search_Patient } from "../POM/search_Patient";
import { nav_menuBar } from "../POM/nav_menu";
import { view_Records } from "../POM/view_records";
import { create_eorder } from "../POM/create_eorder";
import { send_reports } from "../POM/send_reports";
import { VerifyPID } from "../POM/view_pid_TA-518";
import { VerifyNoOfPatientRecordOnAPage } from "../POM/patientRecord_PerPage";
import { VerifySearchWithICNo } from "../POM/search_ICNo";
import { VerifyViewSettings } from "../POM/viewSettings";
import { AddBankDetails } from "../POM/add_BankDetails";
import { VerifyChangeLanguage } from "../POM/change_Language";
import { VerifyPendingConnectionView } from "../POM/pending_Connection";
import { verifyForReviewTab } from "../POM/for_review_tab";
import { EditProfile } from "../POM/edit_profile_TA-53";
import { VerifyChangeClinicFeature } from "../POM/change_Clinics"
import { ViewConnectionQRCode } from "../POM/view_QRCode"
import { ChangePicture } from "../POM/change_Pic"
import { SettingsQR } from "../POM/view_QR_TA-80"

const New_Patinet = new add_Patient()
const Search_Patient = new search_Patient()
const NavBar = new nav_menuBar()
const View_Records = new view_Records()
const Eorder = new create_eorder()
const Send_Reports = new send_reports()
const VerifyPIDs = new VerifyPID()
const VerifyNoOfPatientRecords = new VerifyNoOfPatientRecordOnAPage()
const VerifySearchWithICNos = new VerifySearchWithICNo()
const VerifySettingView = new VerifyViewSettings()
const VerifyAddBankDetails = new AddBankDetails()
const VerifyChangeLang = new VerifyChangeLanguage()
const VerifyViewPendingConnection = new VerifyPendingConnectionView()
const ForReviewTab = new verifyForReviewTab()
const ProfileEdit = new EditProfile()
const ChangeClinics = new VerifyChangeClinicFeature()
const ViewQRCode = new ViewConnectionQRCode()
const ChangeProfilePic = new ChangePicture()
const View_Settings_QR = new SettingsQR


const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomIcValue = faker.number.int();
const randomAddress = faker.person.jobArea();
const randomEmail = faker.internet.email();
const randomPhonenumber = faker.phone.number('+## ########')
const randomStateName = faker.person.jobArea()
const randomCityName = faker.person.jobArea()
const randomBusiness = faker.person.jobTitle()
const randomDOB = faker.date.birthdate();
const randomPostalCode = faker.number.int()
const dateObject = new Date(randomDOB);
const formattedDate = `${dateObject.getDate().toString().padStart(2, '0')}/${(dateObject.getMonth() + 1).toString().padStart(2, '0')}/${dateObject.getFullYear()}`;
const randomPostalValue = String(randomPostalCode).padStart(5, '0');

//Test data for DEV and UAT Env
let fixtureData
  if (Cypress.env('environment') === 'dev'){
      fixtureData = devFixtureData
  }
  else{
    fixtureData = uatFixtureData
  }


describe ('This file will contain autoamted test cases for DP FE related to Profile and Home Page',()=>{
    
    beforeEach('Visiting baseUrl', ()=>{
        cy.visit("");
        cy.loginToApplication(fixtureData.primaryAccountUsername, fixtureData.password);
    })

    it('Add a new Patient', ()=>{
       
        //Add a new Patinet
        //Step 1 Form
        New_Patinet.elements.openAddPatientModal().click()
        New_Patinet.elements.firstName().type(randomFirstName)
        New_Patinet.elements.lastName().type(randomLastName)
        New_Patinet.elements.openGenderMenu().click({force:true})
        New_Patinet.elements.selectPatientGender().click()
        New_Patinet.elements.openCountryMenu().click({force:true})
        New_Patinet.elements.selectCountry().click()
        New_Patinet.elements.typeState().type(randomStateName)
        New_Patinet.elements.typeCity().type(randomCityName)
        New_Patinet.elements.openIcMenu().click({force:true})
        New_Patinet.elements.chooseIcOption().click()
        New_Patinet.elements.enterIcValue().type(randomIcValue)
        New_Patinet.elements.openEthnicityMenu().click({force:true})
        New_Patinet.elements.chooseEthnicityOption().click()
        New_Patinet.elements.enterDateofBirth().type(formattedDate)
        New_Patinet.elements.enterAddress().type(randomAddress)
        New_Patinet.elements.enterPostalCode().type(randomPostalValue)
        New_Patinet.elements.enterNumber().type(randomPhonenumber)
        New_Patinet.elements.enterMobileNumber().type(randomPhonenumber)
        New_Patinet.elements.enterEmail().type(randomEmail)

        //Add a new Patinet
        //Step 2 Form

        New_Patinet.elements.openMaritalStatusMenu().click({force:true})
        New_Patinet.elements.selectMaritalStatus().click()
        New_Patinet.elements.enterOccupation().type(randomBusiness)
        New_Patinet.elements.openLanguageMenu().click({force:true})
        New_Patinet.elements.selectLanguage().click()
        New_Patinet.elements.openReligionStatusMenu().click({force:true})
        New_Patinet.elements.selectReligion().click()
        New_Patinet.elements.openNextOfKinRelationshipMenu().click({force:true})
        New_Patinet.elements.selectNextOfKinRelationship().click()
        New_Patinet.elements.openPaymentMenu().click({force:true})
        New_Patinet.elements.selectPayment().click()
        New_Patinet.elements.moveToStepTwo().eq(1).click({force:true})

    })

    it('Search Patient with Name', ()=>{


        //Search for a Patient with Name
        Search_Patient.elements.searchPatient().type(fixtureData.patient_profile).type('{enter}')
        Search_Patient.elements.openProfile().click()
        
        //Verify that the profile was visited sucessfully
        Search_Patient.elements.verifyProfileVisit();
        
        //Verify that the profile was visited sucessfully
        Search_Patient.elements.verifyProfileVisit();

    })

    it('Search Patient with IC number', ()=>{


        //Search for a Patient with IC number
        Search_Patient.elements.searchPatientWithIcNumber().type(fixtureData.IC_number).type('{enter}')
        Search_Patient.elements.openProfileOfPatientWithICNumber().click()
        Search_Patient.elements.navigateToHomePage()    
        
        //Verify that the profile was visited sucessfully
        Search_Patient.elements.verifyProfileVisit();
        
        //Verify that the profile was visited sucessfully
        Search_Patient.elements.verifyProfileVisit();

    })

    it('View Patient Digital Report and View Patient Records and Profile', ()=>{


        //View Patients Records
        Search_Patient.elements.searchPatient().type(fixtureData.ID_number_of_patient).type('{enter}')
        Eorder.elements.selectPatient().click()
        View_Records.elements.openLabReport().click({force:true})
        View_Records.elements.downloadDigitalReport().click()
        View_Records.elements.openPDF().click({force:true})

        //Verification that PDF is present
        View_Records.elements.assertPDFExists()
    })

    it('Send report to Patient via Phone number', ()=>{


        //Send reports to patients via Phone number
        Search_Patient.elements.searchPatient().type(fixtureData.patient_name).type('{enter}')
        Send_Reports.elements.sendResults().click()
        Send_Reports.elements.sendResultsToPatients().click()

        //assert report was sent to patient via phone number
        Send_Reports.elements.assertNotificationMessage()


    })

    it('Send report to Patient via Email', ()=>{


        //Send reports to patients via Email
        Search_Patient.elements.searchPatient().type(fixtureData.patient_name).type('{enter}')
        Send_Reports.elements.sendResults().click()
        Send_Reports.elements.toggleEmail().click()
        Send_Reports.elements.sendResultsToPatients().click()

        //assert that report was sent via email
        Send_Reports.elements.assertNotificationMessage()

    })

    it('Edit details of phone number to send reports to patients', ()=>{


        //Edit number to send reports to patients
        Search_Patient.elements.searchPatient().type(fixtureData.patient_name).type('{enter}')
        Send_Reports.elements.sendResults().click()
        Send_Reports.elements.editNumber().click()
        Send_Reports.elements.enterNewNumber().clear().type(randomPhonenumber)
        Send_Reports.elements.saveNewNumberOrEmail().click()
        Send_Reports.elements.sendResultsToPatients().click()

        //assert new details were saved
        Send_Reports.elements.assertNotificationMessage()


    })

    it('Edit details of email to send reports to patients', ()=>{


        //Edit email to send reports to patients
        Search_Patient.elements.searchPatient().type(fixtureData.patient_name).type('{enter}')
        Send_Reports.elements.sendResults().click()
        Send_Reports.elements.toggleEmail().click()
        Send_Reports.elements.editEmail().click()
        Send_Reports.elements.enterNewEmail().clear().type(randomEmail)
        Send_Reports.elements.saveNewNumberOrEmail().click()

        //assert new details were saved
        Send_Reports.elements.assertNotificationMessage()

    })

    it('Visit policies of the account', ()=>{

        NavBar.elements.openMenu().click()
        NavBar.elements.openPolicies().click()
        NavBar.elements.visitDataPrivacy().click()

        //asser that you are visisting the policies page
        NavBar.elements.assertPoliciesPageVisit()

    })

    it('Verify that user can view Primary PDF from Homepage of profile', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.patient_profile).type('{enter}')
        View_Records.elements.openPrimaryPDF().click({force:true})
        View_Records.elements.closePDF().click({multiple:true})
    })

    it('Verify that user can view Biomark Digital Report from Homepage of profile', ()=>{
        Search_Patient.elements.searchPatient().type(fixtureData.patient_profile).type('{enter}')
        View_Records.elements.openDigitalReport().click({force:true})
        View_Records.elements.closeDigitalReport().click({force:true})
    })

    //s
    it('Verify if user is able to view Patient ID',()=>{

        VerifyPIDs.Actions(fixtureData.PID, fixtureData.Env)
    })


    //s
    it('Verify if user is able to view 10 patients record per page',()=>{

        VerifyNoOfPatientRecords.Actions()
    })

   
    //s
    it('Verify if user is able to search a patient with IC Number',()=>{

        VerifySearchWithICNos.Actions()
    })

    //s
    it('Verify if user is able to view the Settings screen',()=>{

        VerifySettingView.Actions()
        VerifySettingView.Assertions(fixtureData.Env)
    })

    //s
    it('Verify if user is able to add Bank details',()=>{

        VerifyAddBankDetails.Actions()
        VerifyAddBankDetails.Assertion()
    })

    //s 
    it('Verify user is able to change language',()=>{

        VerifyChangeLang.Actions()
    })

    //s
    it('Verify if user is able to view patient connection requests',()=>{

        VerifyViewPendingConnection.Actions()
    })

    // s - Review Tab
    it('Verify a user can switch to "For review" tab and visit a patient profile', ()=>{

        ForReviewTab.elements.searchPatient().click()
        ForReviewTab.Actions()
        ForReviewTab.elements.verifyProfileVisit()
    })

    it('Verify a user profile can be edited from the profile page',()=>
    {

        ProfileEdit.actions()
        ProfileEdit.assertions()
    //s
    it('Verify a user is able to view the QR code from connection button', ()=>{

        ViewQRCode.Actions()
    })

    //s
    it('Verify a user is user should be able to change clinics', ()=>{

        ChangeClinics.Actions(fixtureData.Env)
    })

    //s
    it('Verify that a user can change picture from "view profile section',()=>{

        ChangeProfilePic.Actions()
        ChangeProfilePic.Assertions()
    })

    it('The user should be able to view the QR code from settings',()=>{

        View_Settings_QR.actions()
        View_Settings_QR.assertions()
    })

})

})