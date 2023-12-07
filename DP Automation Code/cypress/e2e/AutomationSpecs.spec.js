import { verifyForReviewTab } from "../POM/for_review_tab";
import devFixtureData from "../fixtures/dev/patientTestData.dev"
import uatFixtureData from  "../fixtures/uat/patientTestData.uat"
import { remove_lab_item } from "../POM/remove_lab_item";
import { store_front } from "../POM/store_front";
import { labFavItem } from "../POM/labFav_TA-35";
import { labUnFavItem } from "../POM/labUnfav_TA-36";
import { changeCatLab } from "../POM/changeCatLab_TA-37";
import { FAQ_Interaction } from "../POM/FAQ_Interaction_TA_60";
import { SearchBooking } from "../POM/search_booking_TA-61";
import { guideVideo } from "../POM/guide_video_TA-58";


const ForReviewTab = new verifyForReviewTab()
const Remove_Item = new remove_lab_item()
const Store = new store_front()
const lab_Fav = new labFavItem()
const lab_unFav = new labUnFavItem()
const change_category_lab = new changeCatLab()
const FAQ_Page_Interaction = new FAQ_Interaction()
const Search_Booking = new SearchBooking()
const guide_video = new guideVideo()





//Test data for DEV and UAT Env
let fixtureData
  if (Cypress.env('environment') === 'dev'){
      fixtureData = devFixtureData
  }
  else{
    fixtureData = uatFixtureData
  }

describe ('This file will contain autoamted test cases for DP FE',()=>{
    
    beforeEach('Visiting baseUrl', ()=>{
        cy.visit("");
        cy.loginToApplication(fixtureData.primaryAccountUsername, fixtureData.password);
    })
  

   it('Should be able to remove Lab item from the cart', ()=>
    {

        Remove_Item.Actions()
        // Assertion
        Remove_Item.Assertion()
    })
    
    it('Verify If user can add Lab item to favourites', ()=>{

        lab_Fav.Actions()
        //Assertion
        lab_Fav.Assertion()
        //reset condition for repeated Automation
        
        lab_Fav.reset()
    })

    
    it('Verify If a user can Unfavourite a Lab item', ()=>{

        lab_unFav.Actions()
        lab_unFav.Assertion()
    })

    it('Verify If a user can change categories of items in Lab Consumable Tab', ()=>{

        Store.elements.visitStore().click()
        change_category_lab.Actions()
        
    })

    /* it('Verify a user can interact with FAQ on Booking Page', ()=>{

        FAQ_Page_Interaction.Actions()

    })
    
    it('Verify a user can search on Booking page', ()=>
    {

        Search_Booking.actions()
        Search_Booking.assertions()

    })
    */

    it('Verify a user can play the Biomark guide videos', ()=>{

        guide_video.Actions()
        //Guide Video
    })
});
