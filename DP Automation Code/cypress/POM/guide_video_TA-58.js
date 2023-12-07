export class guideVideo{
    elements = {
        //Changed
        videoIcon: ()=> cy.get('[data-testid="VideoLibraryRoundedIcon"]'),

        video:()=> cy.get('.video-react-button.video-react-big-play-button.video-react-big-play-button-left'),
        videoDiv:()=> cy.get('video'),
        video2: ()=> cy.get('.MuiBox-root.css-759u60')


    }
    Actions(){
        this.elements.videoIcon().click()
        this.elements.video().click()
        cy.wait(6000)
        .then(()=>{
            this.elements.videoDiv().should('not.have.prop', 'paused', true)
            
        })
        this.elements.video2().eq(1).click()
        this.elements.video().click()
        cy.wait(6000)
        .then(()=>{
            this.elements.videoDiv().should('not.have.prop', 'paused', true)
        })

        this.elements.video2().eq(2).click()
        this.elements.video().click()
        cy.wait(6000)
        .then(()=>{
            this.elements.videoDiv().should('not.have.prop', 'paused', true)
        })

        this.elements.video2().eq(3).click()
        this.elements.video().click()
        cy.wait(6000)
        .then(()=>{
            this.elements.videoDiv().should('not.have.prop', 'paused', true)
        })

        this.elements.video2().eq(4).click()
        this.elements.video().click()
        cy.wait(6000)
        .then(()=>{
            this.elements.videoDiv().should('not.have.prop', 'paused', true)
        })

        }
}