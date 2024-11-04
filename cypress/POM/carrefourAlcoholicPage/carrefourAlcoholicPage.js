import { carrefourAlcoholicPageLocators} from './carrefourAlcoholicPageLocators'

class CarrefourAlcoholicPage {
    elements = {
        filterBtn: () => { return cy.get(carrefourAlcoholicPageLocators.filterBtn) },
        applyBtn: () => { return cy.get(carrefourAlcoholicPageLocators.applyBtn) },
        brandName: () => { return cy.get(carrefourAlcoholicPageLocators.brandName).contains('Արարատ')},
        productItem: () => { return cy.get(carrefourAlcoholicPageLocators.productItem)}
    }

    visit(){
        cy.visit('/undefined/supermarkets/carrefour/alcoholic-beverages')
    }

    openFilters(){
        this.elements.filterBtn().click()
        cy.wait(3000)
    }
    
    apply(){
        this.elements.applyBtn().click()
        cy.wait(2000)
    }
 
}

export const carrefourAlcoholicPage = new CarrefourAlcoholicPage()