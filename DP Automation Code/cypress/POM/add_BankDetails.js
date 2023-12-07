
import { faker } from '@faker-js/faker';
import { VerifyViewSettings } from "../POM/viewSettings";
const ViewSettings = new VerifyViewSettings();

const accountNo = faker.finance.accountNumber()
const accountName = faker.finance.accountName()
const swiftCode = "LOYDCHGGZCH"
const branchCode = "SCBLMYKXXX" 

export class AddBankDetails{
    elements = {
        clickMenu:()=> cy.get('#AvatarMenu').should('be.visible'),
        clickBankDetailsBtn:()=> cy.get("#tab-panel-05").should('be.visible'),
        enterAccountNo:()=> cy.get('[name="bank_account_no"]'),
        clickBankNameDropdown:()=> cy.get('#demo-simple-select'),
        selectBankName:()=> cy.get('[data-value="STANDARD CHARTERED BANK MALAYSIA BERHAD"]'),
        enterAccountName:()=> cy.get('[name="account_name"]'),
        enterSwiftCode:()=> cy.get('[name="swift_code"]'),
        enterBranchCode:()=> cy.get('[name="branch_code"]'),
        saveButton:()=> cy.contains('Save Changes').should('not.be.disabled'),
        assertNotificationMessage:()=> cy.get('.notification-message')
    }

    Actions(){
        this.elements.clickMenu().click()
        ViewSettings.elements.clickSettings().click()
        ViewSettings.elements.verifySetting()
        this.elements.clickBankDetailsBtn().click()
        cy.wait(300)
        this.elements.enterAccountNo().focus().clear()
        this.elements.enterAccountNo().type(accountNo)
        this.elements.clickBankNameDropdown().click()
        this.elements.selectBankName().click()
        
        this.elements.enterAccountName().clear()
        this.elements.enterAccountName().type(accountName)
        this.elements.enterSwiftCode().clear()
        this.elements.enterSwiftCode().type(swiftCode)
        this.elements.enterBranchCode().clear()
        this.elements.enterBranchCode().type(branchCode)
        this.elements.saveButton().click()
    }

    Assertion(){
        this.elements.assertNotificationMessage().should('be.visible')
    }
    //s
}