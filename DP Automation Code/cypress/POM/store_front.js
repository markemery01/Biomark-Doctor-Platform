export class store_front{
    elements={

        //Functions to handle store front module
        visitStore:()=> cy.contains('Store'),
        searchProduct:()=> cy.get('[placeholder="Search..."]'),
        viewGavisconProduct:()=> cy.contains('Gaviscon Double Action Liquid 300mlx12'). should('exist', { timeout: 10000 }),
        addOrRemoveProduct:()=> cy.get('[type = "button"]'),
        goBackToStore:()=> cy.contains('Back'),
        addZanidip:()=> cy.contains('Zanidip 20mg 25S x 4 [Lercanidipine]'),
        addFortzar:()=> cy.contains('Fortzaar 100mg/25mg Tab 10Sx3 [Losartan/Hct]'),
        viewBasket:()=> cy.contains('Basket'),
        viewCart:()=> cy.contains('View my cart'),


        deleteFortzarItem: () => {
            cy.contains('td', 'Fortzaar 100mg/25mg Tab 10Sx3 [Losartan/Hct]')
              .siblings('td')
              .eq(-1) // -1 refers to the last element
              .find('[alt="delete"]') // Assuming the delete icon has an alt attribute
              .click();
          },

          deleteZenidipItem: () => {
            cy.contains('td', 'Zanidip 20mg 25S x 4 [Lercanidipine]')
              .siblings('td')
              .eq(-1) // -1 refers to the last element
              .find('[alt="delete"]') // Assuming the delete icon has an alt attribute
              .click();
          },

          deleteGavisconItem: () => {
            cy.contains('td', 'Gaviscon Double Action Liquid 300mlx12')
              .siblings('td')
              .eq(-1) // -1 refers to the last element
              .find('[alt="delete"]') // Assuming the delete icon has an alt attribute
              .click();
          },
          
          

          increaseFortzarQuantity: () => {
            cy.contains('td', 'Fortzaar 100mg/25mg Tab 10Sx3 [Losartan/Hct]')
              .siblings('td')
              .find('[class="counter"]') // Assuming the delete icon has an alt attribute
              .type(12);
          },

          increaseZenidipQuantity: () => {
            cy.contains('td', 'Zanidip 20mg 25S x 4 [Lercanidipine]')
              .siblings('td')
              .find('[class="counter"]') // Assuming the delete icon has an alt attribute
              .type(12);
          },

        visitStorehistory:()=> cy.contains('Store History'),
        visitMakepaymentPage:()=> cy.contains('Make Payment'),
        fillCardname:()=> cy.get('[placeholder="Card Holder Name"]'),
        fillCardnumber:()=> cy.get('[placeholder="Credit / Debit Card Number"]'),
        fillMonth:()=> cy.get('[name="cc_expiry_month"]').select('05'),
        fillYear:()=> cy.get('[name="cc_expiry_month"]').select('2025'),
        fillCVV:()=> cy.get('placeholder="CVV"'),
        clickPaybutton:()=> cy.get('[class="btn-pay"]'),
        verifyStockAvailible:()=> cy.contains('Stock Available').should('exist', { timeout: 10000 }),
        verifyAddedProduct:()=> cy.get('.notification-message').should('be.visible'),

        //Functions to manage different selllers and view products from differnt sellers

        selectPharamarise:()=> cy.contains('Pharmarise'),
        verfiyPharmariseProducts:(pharmariseMeds)=> cy.contains(pharmariseMeds).should('exist'),
        selectBigPharma:()=> cy.contains('BIG Pharmacy Healthcare Sdn. Bhd. (206'),
        verifyBigPharmaMedicine:(bigPharmaMedicine)=> cy.contains(bigPharmaMedicine).should('exist')
    }
}