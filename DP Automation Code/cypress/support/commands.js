import { login_Page } from "../POM/login_Page";
import { nav_menuBar } from "../POM/nav_menu";
const Login = new login_Page()
const NavBar = new nav_menuBar()
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginToApplication', (primaryAccountUsername, password)=> {
    Login.elements.enterUsername().type(primaryAccountUsername)
    Login.elements.enterPassword().type(password)
    Login.elements.clickSignInButton().click()
  });
  
Cypress.Commands.add('logOutOfApplication', ()=>{
    NavBar.elements.openMenu().click()
    Login.elements.clickLogoutButton().click()
})