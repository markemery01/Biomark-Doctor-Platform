
const noOfRecordOnAPage = 10
export class VerifyNoOfPatientRecordOnAPage{
    elements = {
        noOfRecords:()=> cy.get('table tbody'),
        goToPageTwo:()=> cy.get('[aria-label="Go to page 2"]').scrollIntoView(),
        goToPageThree:()=> cy.get('[aria-label="Go to page 3"]').scrollIntoView(),
        goToPageFour:()=> cy.get('[aria-label="Go to page 4"]').scrollIntoView(),
        goToPageFive:()=> cy.get('[aria-label="Go to page 5"]').scrollIntoView()
    }

    Actions(){
        this.CountNoOfRows()
        this.elements.goToPageTwo().click()
        this.CountNoOfRows()
        this.elements.goToPageThree().click()
        this.CountNoOfRows()
        this.elements.goToPageFour().click()
        this.CountNoOfRows()
        this.elements.goToPageFive().click()
        this.CountNoOfRows()
    }

    CountNoOfRows(){
        this.elements.noOfRecords().find("tr").then((row) => {
            const noOfRows = row.length
            cy.log(noOfRows);
            expect(noOfRows).to.be.eq(noOfRecordOnAPage)
        });
    }
}
//s