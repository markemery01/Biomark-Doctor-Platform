import devFixtureData from "../fixtures/dev/patientTestData.dev"
import uatFixtureData from  "../fixtures/uat/patientTestData.uat"
import { login_Page } from "../POM/login_Page";
import { VerifyLogoutFeature } from "../POM/logout_TA-30";


const Login = new login_Page()
const VerifyLogout = new VerifyLogoutFeature()


//Test data for DEV and UAT Env
let fixtureData
  if (Cypress.env('environment') === 'dev'){
      fixtureData = devFixtureData
  }
  else{
    fixtureData = uatFixtureData
  }

describe ('This file will contain autoamted test cases for DP FE related to Login and Logout Flows',()=>{
    
    beforeEach('Visiting baseUrl', ()=>{
        cy.visit("");
        cy.loginToApplication(fixtureData.primaryAccountUsername, fixtureData.password);
    })
  
    it('Primary Account Sign In to the application', ()=>{
         Login.elements.assertSuccessfullPrimaryAccountLogin()
    })

    it('Primary Account Sign In to the application with wrong credentials', ()=>{
        //First we need to logout
        cy.logOutOfApplication()
        Login.elements.enterUsername().type(fixtureData.primaryAccountUsername)
        Login.elements.enterPassword().type(fixtureData.wrongPassword)
        Login.elements.clickSignInButton().click()
        //asert that primary account login failed with wrong credentials
        Login.elements.assertFailedPrimaryAccountLogin()
    })

    it('Secondary Account Sign In to the application with wrong credentials', ()=>{
        //First we need to logout
        cy.logOutOfApplication()
        Login.elements.clickCheckBox().click()
        Login.elements.enterUsername().type(fixtureData.primaryAccountUsername)
        Login.elements.enterSecondaryUsername().type(fixtureData.secondaryAccountUsername)
        Login.elements.enterPassword().type(fixtureData.wrongPassword)
        Login.elements.clickSignInButton().click()
        //asert that secondary account login failed with wrong credentials
        Login.elements.assertFailedSecondaryAccountLogin()
    })

    it('Secondary Account Sign In to the application with correct credentials', ()=>{
        //First we need to logout
        cy.logOutOfApplication()
        Login.elements.clickCheckBox().click()
        Login.elements.enterUsername().type(fixtureData.primaryAccountUsername)
        Login.elements.enterSecondaryUsername().type(fixtureData.secondaryAccountUsername)
        Login.elements.enterPassword().type(fixtureData.password)
        Login.elements.clickSignInButton().click()
        //asert that secondary account login failed with wrong credentials
        Login.elements.assertSuccessfullPrimaryAccountLogin()

    })

     //s
     it('Verify if user is able to Logout from the account',()=>{

        VerifyLogout.Actions()
        VerifyLogout.Assertions(fixtureData.Env)
    })

})