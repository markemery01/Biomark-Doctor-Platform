export class add_Patient{
    elements={

        //For Adding and viewing records of patients
        //Step 1 Form
        openAddPatientModal:()=> cy.contains('Add Patient'),
        firstName:()=> cy.get('[name="firstname"]'),
        lastName:()=> cy.get('[data-test-id = "lastName"]'),
        openGenderMenu:()=> cy.get('[data-test-id = "chooseGender"]').contains('Select'),
        selectPatientGender:()=> cy.contains('Male'),
        openCountryMenu:()=> cy.contains('Select'),
        selectCountry:()=> cy.contains('Singapore'),
        typeState:()=> cy.get('[data-test-id = "patientState"]'),
        typeCity:()=> cy.get('[data-test-id = "patientCity"]'),
        openIcMenu:()=> cy.contains('Select'),
        chooseIcOption:()=> cy.contains('Passport Number'),
        enterIcValue:()=> cy.get('[name="ic_number"]'),
        openEthnicityMenu:()=> cy.contains('Select'),
        chooseEthnicityOption:()=> cy.contains('Indian'),
        enterDateofBirth:()=> cy.get('[placeholder="dd/mm/yyyy"]'),
        enterAddress:()=> cy.get('[data-test-id = "enterAddress"]'),
        enterPostalCode:()=> cy.get('[data-test-id = "enterPostalCode"]'),
        enterNumber:()=> cy.get('[data-test-id = "enterNumber"]'),
        enterMobileNumber:()=> cy.get('[data-test-id = "enterMobileNumber"]'),
        enterEmail:()=> cy.get('[data-test-id = "enterEmail"]'),
        moveToStepTwo:()=> cy.get('[type = "submit"]'),

        //Step 2 Form
        openMaritalStatusMenu:()=> cy.contains('Select'),
        selectMaritalStatus:()=> cy.contains('Single'),
        enterOccupation:()=> cy.get('[data-test-id = "enterOccupation"]'),
        openLanguageMenu:()=> cy.contains('Select'),
        selectLanguage:()=> cy.contains('English'),
        openReligionStatusMenu:()=> cy.contains('Select'),
        selectReligion:()=> cy.contains('Islam'),
        enterNextOfKin:()=> cy.get('[data-test-id = "nextOfKin"]'),
        openNextOfKinRelationshipMenu:()=> cy.contains('Select'),
        selectNextOfKinRelationship:()=> cy.contains('Parent'),
        openPaymentMenu:()=> cy.contains('Select'),
        selectPayment:()=> cy.contains('Self Pay'),

    }
}