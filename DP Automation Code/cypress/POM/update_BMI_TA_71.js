

const minWeight_kgs = 5
const maxWeight_kgs = 200
const randomWeightKgs = Math.floor(Math.random()* (maxWeight_kgs - minWeight_kgs +1)) + minWeight_kgs

const minHeight_Cm = 60
const maxHeight_Cm = 250
const randomHeightCms = Math.floor(Math.random()* (maxHeight_Cm - minHeight_Cm +1)) + minHeight_Cm

const minWeight_lbs = 5
const maxWeight_lbs = 440
const randomWeightLbs = Math.floor(Math.random()* (maxWeight_lbs - minWeight_lbs +1)) + minWeight_lbs

const minHeight_fts = 1
const maxHeight_fts = 8
const randomHeightFts = Math.floor(Math.random()* (maxHeight_fts - minHeight_fts +1)) + minHeight_fts

const minInch = 1
const maxInch = 12
const randomInches = Math.floor(Math.random()* (maxInch - minInch)) + minInch




import fixture from "../fixtures/uat/patientTestData.uat.json"
export class updateBMI{
    elements={
        //Changed
        searchBar:()=> cy.get('[data-test-id="searchPatient"]'),
        yousma:()=> cy.get('.MuiTableRow-root.css-10z6iom').contains('S9699999G'),
        medicalHistoryBtn:()=> cy.get('[type=button]').contains('Medical History'),
        unitDropDown:()=> cy.get('#bmi-unit-select'),
        unitSelect:()=> cy.get('[role="option"]'),
        weightHeight:()=>cy.get('[type="number"]'),
        updateBMIBtn:()=> cy.get('[type="button"]'),

        //AssertionData
        notification:()=> cy.get('.notification')

    }
    Actions(){

        //Kg/cm
        this.elements.searchBar().type(fixture.Youmsaic).type('{enter}')
        this.elements.yousma().click()
        this.elements.medicalHistoryBtn().click()
        this.elements.unitDropDown().scrollIntoView()
        this.elements.unitDropDown().click()
        this.elements.unitSelect().eq(0).click()
        this.elements.weightHeight().eq(2).type(randomWeightKgs)
        this.elements.weightHeight().eq(3).type(randomHeightCms)
        this.elements.updateBMIBtn().contains('Update BMI').click()
        //Assertion Check
        this.elements.notification().contains('Success').should('exist')

        //lbs/ft
        this.elements.unitDropDown().scrollIntoView()
        this.elements.unitDropDown().click()
        this.elements.unitSelect().eq(1).click()
        this.elements.weightHeight().eq(2).type(randomWeightLbs)
        this.elements.weightHeight().eq(3).type(randomHeightFts)
        this.elements.weightHeight().eq(4).type(randomInches)
        this.elements.updateBMIBtn().contains('Update BMI').click()
        //Assertion Check
        this.elements.notification().contains('Success').should('exist')
       }

       NegativeActions(){
        
        //kg/cms
        this.elements.unitDropDown().scrollIntoView()
        this.elements.unitDropDown().click()
        this.elements.unitSelect().eq(0).click()
        this.elements.weightHeight().eq(2).type(250)
        this.elements.weightHeight().eq(3).type(300)
        this.elements.updateBMIBtn().contains('Update BMI').click()
        //Assertion Check
        cy.get('.MuiBox-root.css-1j9ku0w').should('exist')

        //lbs/ft
        this.elements.unitDropDown().scrollIntoView()
        this.elements.unitDropDown().click()
        this.elements.unitSelect().eq(1).click()
        this.elements.weightHeight().eq(2).clear().type('500')
        this.elements.weightHeight().eq(3).clear().type('9')
        this.elements.weightHeight().eq(4).clear().type('13')
        this.elements.updateBMIBtn().contains('Update BMI').click()
        //Assertion Check
        cy.get('.MuiBox-root.css-1j9ku0w').should('exist')

        


       }
}