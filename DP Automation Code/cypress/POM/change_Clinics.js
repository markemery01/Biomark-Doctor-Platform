export class VerifyChangeClinicFeature{
    
    elements ={
        selectDropDown:()=> cy.get('#demo-simple-select'),
        selectValOne:()=>cy.get('[role="option"]').eq(1),
        selectValTwo:()=>cy.get('[role="option"]').eq(2)
    }

    Actions(Env){
        
        this.elements.selectDropDown().should("have.text","Current User")
        this.elements.selectDropDown().click()

        if(Env == 'dev'){
            this.elements.selectValOne().click()
            this.elements.selectDropDown().should("have.text","HLTHCLINC (Healthstone Clinic)")
            this.elements.selectDropDown().click()
            this.elements.selectValTwo().click()
            this.elements.selectDropDown().should("have.text","KARMAN (Karman Clinic)")
        }else{
            this.elements.selectValOne().click()
            this.elements.selectDropDown().should("have.text","AMWA3 (Doctor Eorder Clinic)")
            this.elements.selectDropDown().click()
            this.elements.selectValTwo().click()
            this.elements.selectDropDown().should("have.text","EORDERUAT1 (Eorderuat1)")
        }      
    }
} 
//s