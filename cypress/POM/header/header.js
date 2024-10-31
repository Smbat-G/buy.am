import { headerLocators } from "./headerLocators"

class Header {
    elements = {
       search: {
        input: () => { return cy.get(headerLocators.search.input) },
        button: () => { return cy.get(headerLocators.search.button) }
       }
    }

    enterSearchTerm(term){
        this.elements.search.input().clear().type(term)
        }
        
        clickSearchButton(){
            this.elements.search.button().click()
            cy.wait(3000)
        }
}

export const header = new Header()