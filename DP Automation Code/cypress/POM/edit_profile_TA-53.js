import { faker } from "@faker-js/faker"
import { slowCypressDown } from "cypress-slow-down";
const IC = "S9699999G"

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomAddress = faker.person.jobArea();
const randomEmail = faker.internet.email();
const randomPhonenumber = faker.phone.number('+## ########')
const randomStateName = faker.person.jobArea()
const randomCityName = faker.person.jobArea()
const randomPostalCode = faker.number.int()
const randomBusiness = faker.person.jobTitle()
const randomNextOfKin = faker.person.firstName()

const randomDOB = faker.date.birthdate()
const dateObject = new Date(randomDOB)
const formattedDate = `${dateObject.getDate().toString().padStart(2, '0')}/${(dateObject.getMonth() + 1).toString().padStart(2, '0')}/${dateObject.getFullYear()}`
const randomPostalValue = String(randomPostalCode).padStart(5, '0')

export class EditProfile
{
    elements=
    {   //Changed
        SearchIC:()=> cy.get('[data-test-id = "searchPatient"]'),
        ClickSearch:()=> cy.contains('Search'),
        SelectIC:()=> cy.contains('S9699999G'),
        EditProfilebtn:()=> cy.get('[type="button"]').contains('Edit Profile'),
        FirstName:()=> cy.get('[name="firstname"]'),
        LastName:()=> cy.get('[data-test-id = "lastName"]'),
        Gender:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(0),
        Country:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(1),
        State:()=> cy.get('[name="state"]'),
        City:()=> cy.get('[name="city"]'),
        ICType:()=> cy.get('[aria-haspopup="listbox"]').eq(2),
        Ethnicity:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(3),
        DateofBirth:()=> cy.get('#date-label'),
        MRN:()=> cy.get('[name="mrn"]'),
        Address:()=> cy.get('[data-test-id = "enterAddress"]'),
        PostalCode:()=> cy.get('[data-test-id = "enterPostalCode"]'),
        OptionalNumber:()=> cy.get('[data-test-id = "enterNumber"]'),
        MobileNumber:()=> cy.get('[data-test-id = "enterMobileNumber"]'),
        Email:()=> cy.get('[data-test-id = "enterEmail"]'),
        //NextBtn:()=> cy.get('[type = "submit"]'),

        MaritalStatus:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(4),
        Occupation:()=> cy.get('[data-test-id = "enterOccupation"]'),
        Language:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(5),
        Religion:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(6),
        //NextOfKin:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm'),
        NextOfKinRelationship:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(7),
        Payor:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(8),
        SelectInsurer:()=> cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1edl3hm').eq(9),
        PolicyNumber:()=> cy.get('[name="policy_no"]'),
        ExpiryDate:()=> cy.get('[type="tel"]').eq(3),
        Save:()=> cy.get('[type="submit"]')
    }

    actions()
    {
        this.elements.SearchIC().type(IC)
        this.elements.ClickSearch().click().click()
        this.elements.SelectIC().click()
        this.elements.EditProfilebtn().click()
        this.elements.FirstName().clear().type(randomFirstName)
        this.elements.LastName().clear().type(randomLastName)
        this.elements.Gender().then(($element) => {
            if ($element.text().includes('Male')) {
                this.elements.Gender().click()
                cy.get('[data-value="Female"]').click({force: true})
            } else if ($element.text().includes('Female')) {
                this.elements.Gender().click()
                cy.get('[data-value="Others"]').click({force:true})
            }
            else {
                this.elements.Gender().click()
                cy.get('[data-value="Male"]').click({force:true})
            }
        })

        this.elements.Country().then(($element) => {
            if ($element.text().includes('Singapore')) {
                this.elements.Country().click({force: true})
                cy.get('[data-value="Malaysia"]').click({force: true})
            } else if ($element.text().includes('Malaysia')) {
                this.elements.Country().click({force: true})
                cy.get('[data-value="Pakistan"]').click({force: true})
            }
            else {
                this.elements.Country().click({force: true})
                cy.get('[data-value="Singapore"]').click({force: true})
            }
        })

        this.elements.State().first().clear({force: true}).type(randomStateName)
        this.elements.City().clear({force: true}).type(randomCityName)

        this.elements.ICType().then(($element) => {
            if ($element.text().includes('NRIC/FIN')) {
                this.elements.ICType().click()
                cy.get('[role="option"]').eq(3).click()
            } else if ($element.text().includes('Passport Number')) {
                this.elements.ICType().click()
                cy.get('[role="option"]').eq(2).click()
            }
            else {
                this.elements.ICType().click()
                cy.get('[role="option"]').eq(1).click()
            }
        })

        this.elements.Ethnicity().then(($element) => {
            if ($element.text().includes('Chinese')) {
                this.elements.Ethnicity().click()
                cy.get('[data-value="Thai"]').click()
            } else if ($element.text().includes('Thai')) {
                this.elements.Ethnicity().click()
                cy.get('[data-value="Indian"]').click()
            }
            else {
                this.elements.Ethnicity().click()
                cy.get('[data-value="Chinese"]').click()
            }
        })

        this.elements.DateofBirth().clear().type(formattedDate)
        this.elements.MRN().clear().type(randomPostalCode)
        this.elements.Address().clear().type(randomAddress)
        this.elements.PostalCode().clear().type(randomPostalCode)
        this.elements.OptionalNumber().clear().type(randomPhonenumber)
        this.elements.MobileNumber().clear().type(randomPhonenumber)
        this.elements.Email().clear().type(randomEmail)
        //this.elements.NextBtn().click({force: true})

        this.elements.MaritalStatus().then(($element) => {
            if ($element.text().includes('Divorced')) {
                this.elements.MaritalStatus().click()
                cy.get('[data-value="Married"]').click({force: true})
            } else if ($element.text().includes('Married')) {
                this.elements.MaritalStatus().click()
                cy.get('[data-value="Single"]').click({force: true})
            }
            else {
                this.elements.MaritalStatus().click()
                cy.get('[data-value="Divorced"]').click({force: true})
            }
        }) 

        this.elements.Occupation().clear().type(randomBusiness)

        this.elements.Language().then(($element) => {
            if ($element.text().includes('English')) {
                this.elements.Language().click()
                cy.get('[data-value="Malay"]').click({force:true})
            } else if ($element.text().includes('Malay')) {
                this.elements.Language().click()
                cy.get('[data-value="Tamil"]').click({force:true})
            }
            else {
                this.elements.Language().click()
                cy.get('[data-value="English"]').click({force:true})
            }
        })

        this.elements.Religion().then(($element) => {
            if ($element.text().includes('Islam')) {
                this.elements.Religion().click({force:true})
                cy.get('[data-value="Christianity"]').click()
            } else if ($element.text().includes('Christianity')) {
                this.elements.Religion().click({force:true})
                cy.get('[data-value="Hinduism"]').click()
            }
            else {
                this.elements.Religion().click()
                cy.get('[data-value="Islam"]').click({force:true})
            }
        }) 

        //this.elements.NextOfKin().clear().type(randomNextOfKin)

        this.elements.NextOfKinRelationship().then(($element) => {
            if ($element.text().includes('Parent')) {
                this.elements.NextOfKinRelationship().click()
                cy.get('[role="option"]').eq(2).click()
            } else if ($element.text().includes('Spouse')) {
                this.elements.NextOfKinRelationship().click()
                cy.get('[role="option"]').eq(4).click()
            }
            else {
                this.elements.NextOfKinRelationship().click()
                cy.get('[role="option"]').eq(1).click()
            }
        })

        this.elements.Payor().then(($element) => {
            if ($element.text().includes('Self Pay')) {
                this.elements.Payor().click()
                cy.get('[role="option"]').eq(2).click()
            } 
            else {
                this.elements.Payor().click()
                cy.get('[role="option"]').eq(1).click()
                this.elements.Save().click()
            }
        })

        this.elements.Payor().then(($element) => {
            if ($element.text().includes('Insurer')) {
                this.elements.SelectInsurer().then(($element) => {
                    if ($element.text().includes('AIA')) {
                        this.elements.SelectInsurer().click()
                        cy.get('[role="option"]').eq(6).click()
                    } else if ($element.text().includes('Aviva')) {
                        this.elements.SelectInsurer().click()
                        cy.get('[role="option"]').eq(7).click()
                    }
                    else {
                        this.elements.SelectInsurer().click()
                        cy.get('[role="option"]').eq(3).click()
                    }
                })
    
                this.elements.PolicyNumber().clear().type(randomPostalCode)
                this.elements.ExpiryDate().clear().type('31/12/2026')
                this.elements.Save().click()
            } 
            
        })
        
    }

    assertions()
    {
        cy.wait(2000).get('[data-testid="CheckCircleIcon"]').next().then(($element) => {
            const text = $element.text();
            expect(text).to.equal('Patient Profile Updated');
          });

    }
}