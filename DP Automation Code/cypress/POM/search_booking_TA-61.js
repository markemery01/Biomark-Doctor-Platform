export class SearchBooking
{
    elements=
    {
        BookingBtn:()=> cy.get('[to="/bookings"]'),
        BookingSearch:()=> cy.get('[type="text"]'),
        ClickSearchBtn:()=> cy.get('[type="button"]').eq(4),
        CpmpletedTabBtn:()=> cy.get('[aria-controls="dashboard-tabpanel-1"]')
    }

    actions()
    {
        this.elements.BookingBtn().click()
        this.elements.BookingSearch().type("S2099999K")
        this.elements.ClickSearchBtn().click().click()
    }

    assertions()
    {
        // Check Pending Bookings
        cy.wait(3000)
        cy.get('[aria-controls="dashboard-tabpanel-0"]').then((totalbookings)=>{
            cy.log(totalbookings.text())
        })
        cy.get('.MuiTableRow-root.css-1ajgo37').then(($random_element)=>{
            const patient_details = $random_element.length
            const random_index = Math.floor(Math.random()*patient_details)
            cy.wrap($random_element[random_index]).contains('S2099999K').should('exist')
        })

        // Check Completed Bookings
        this.elements.CpmpletedTabBtn().click()
        cy.wait(3000)
        cy.get('[aria-controls="dashboard-tabpanel-1"]').then((totalbookings)=>{
            cy.log(totalbookings.text())
        })
        cy.get('.MuiTableRow-root.css-1ajgo37').then(($random_element)=>{
            const patient_details = $random_element.length
            const random_index = Math.floor(Math.random()*patient_details)
            cy.wrap($random_element[random_index]).contains('S2099999K').should('exist')
        })
       
    }
}