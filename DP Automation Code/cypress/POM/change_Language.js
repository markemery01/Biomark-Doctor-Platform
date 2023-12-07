export class VerifyChangeLanguage {
    elements = {
        clickLanguageSelect:()=> cy.get('#language-selected'),
        selectBahasaIndo:()=> cy.get('#ID'),
        selectChinese:()=> cy.get('#ZH'),
        selectBahasaMalayu:()=> cy.get('#MY'),
        selectThai:()=> cy.get('#TH'),
        selectVietnamese:()=> cy.get('#VN'),
        selectEnglish:()=>cy.get('#EN')
    }

    Actions(){
        this.elements.clickLanguageSelect().should("have.text","EN")
        this.elements.clickLanguageSelect().click()

        this.elements.selectBahasaIndo().click()
        this.elements.clickLanguageSelect().should("have.text","ID")

        this.elements.clickLanguageSelect().click()
        this.elements.selectChinese().click()
        this.elements.clickLanguageSelect().should("have.text","ZH")

        this.elements.clickLanguageSelect().click()
        this.elements.selectBahasaMalayu().click()
        this.elements.clickLanguageSelect().should("have.text","MY")

        this.elements.clickLanguageSelect().click()
        this.elements.selectThai().click()
        this.elements.clickLanguageSelect().should("have.text","TH")

        this.elements.clickLanguageSelect().click()
        this.elements.selectVietnamese().click()
        this.elements.clickLanguageSelect().should("have.text","VN")

        this.elements.clickLanguageSelect().click()
        this.elements.selectEnglish().click()
        this.elements.clickLanguageSelect().should("have.text","EN")

    }
}
//s