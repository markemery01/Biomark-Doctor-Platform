export class view_Records {
    elements ={

        //Functions to view records of patients
        openLabReport:()=> cy.contains("Biomark Digital Report",).should('exist',  { timeout: 10000 }),
        downloadDigitalReport:()=> cy.contains('Generate BioMark Report PDF').should('exist', { timeout: 10000 }),
        closeLabReport:()=> cy.get('[aria-label="close"]').should('exist', { timeout: 10000 }),
        openPDF:()=> cy.contains("Formal Lab PDF").should('exist', { timeout: 10000 }),
        openPdfMenu:()=> cy.wait(5000).contains('Main PDF Report'),
        selectSecondaryPDF:()=> cy.contains('Anatomical Pathology'),
        assertPDFExists:()=> cy.scrollTo('bottom').then(() => {
                                                    cy.contains('Primary Lab PDF here.')
                                                    .should('exist');
                                                }),
        assertNoPdfExists:()=> cy.scrollTo('bottom').then(() => {
                                                        cy.contains('"No PDF Available"')
                                                        .should('exist');
                                                }),      
        assertSecondaryPdfExists:()=> cy.scrollTo('bottom').then(() => {
                                                                cy.wait(5000).contains('Anatomical Pathology Report PDF here.')
                                                                .should('exist');
                                                }),
        asserNoLabDataExists:()=> cy.get('[id="report"]').should('have.text', 'No Lab Results YetNo lab results are in yet for this patient.'), 
        assertNoTrendsDataExists:()=> cy.contains('No Data Yet').should('exist'),                             
        closePDF:()=> cy.get('[data-testid="CloseIcon"]').should('exist', { timeout: 10000 }),
        viewMoreSettings:()=> cy.get('[data-testid="MoreVertIcon"]').should('exist', { timeout: 10000 }),
        viewPatient:()=> cy.get('#simple-popper').contains('View Patient'),
        openPrimaryPDF:()=> cy.get('[aria-label="Preview Laboratory PDF"]'),
        openDigitalReport:()=> cy.get('[aria-label="View BioMark Digital Report"]'),
        closeDigitalReport:()=> cy.get('[aria-label="close"]'),
        navigateToHealthSummmaryScreen:()=> cy.contains('Health Summary'),
        verifyDiabetesScore:()=> cy.contains('Low Risk-2').should('exist'),
        verifyBloodPressureScore:()=> cy.contains('120/80 Elevated').should('exist'),
        verifyBMI:()=> cy.contains('20.7 Normal').should('exist'),
        verifySmoking:()=> cy.contains('Not Smoking').should('exist'),
        verifyDrinking:()=> cy.contains('Not Drinking').should('exist'),
        verifyStress:()=> cy.contains('Moderate Risk').should('exist'),

        selectPatient:(patient_profile_IC_number)=> cy.wait(5000)
            .contains('td', patient_profile_IC_number),

        navigateToMedicalHistoryScreen:()=> cy.contains('Medical History'),
        openBloodSugarUnitDropdown:()=> cy.get('[id="blood-sugar-unit-select"]'),
        selectUnit:()=> cy.contains('mmol/L'),
        enterBPValue:()=> cy.get('[type="number"]'),
        updateBP:()=> cy.contains('Update BP'),
        updateBMI:()=> cy.contains('Update BMI'),
        verifyMedications:()=> cy.contains('No Medications').should('exist'),

        hiveIcon:()=> cy.get('[alt="mobile"]'),
        verifyName:()=> cy.contains('Dev Biomarkars').should('exist'),
        verifyICNumber:()=> cy.contains('S1234567U').should('exist'),
        verifyNumber:()=> cy.contains('+923201111606').should('exist'),

        selectDate:()=> cy.get('[placeholder="DD/MM/YYYY - DD/MM/YYYY"]'),
        selctSteps:()=> cy.contains('Steps'),
        selectCalories:()=> cy.contains('Calories'),
        selectDistance:()=> cy.contains('Distance'),
        selectDevice:()=> cy.contains('Google Fit'),

        navigateToTrends:()=> cy.contains('Trends'),
        viewFullBloodExamination:()=> cy.contains('Full Blood Examination').wait(2000),
        viewRenalFunction:()=> cy.contains('Renal Function').wait(2000),
        viewMineralAndVitaminStudies:()=> cy.contains('Mineral & Vitamin Studies').wait(2000),
        assertSodium:()=> cy.contains('Sodium').should('exist'),
        assertMonocytes:()=> cy.contains('Monocytes %').should('exist'),
        assertSerumCalcium:()=> cy.contains('Serum Calcium').should('exist')
    }
}