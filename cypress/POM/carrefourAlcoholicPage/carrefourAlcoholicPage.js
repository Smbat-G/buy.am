import { carrefourAlcoholicPageLocators} from './carrefourAlcoholicPageLocators'

class CarrefourAlcoholicPage {
    elements = {
        filterBtn: () => { return cy.get(carrefourAlcoholicPageLocators.filterBtn) },
        applyBtn: () => { return cy.get(carrefourAlcoholicPageLocators.applyBtn) },
        brandNameArarat: () => { return cy.get(carrefourAlcoholicPageLocators.brandNameArarat)},
        productList: () => { return cy.get(carrefourAlcoholicPageLocators.productList)}
    }

    visit(){
        cy.visit('/undefined/supermarkets/carrefour/alcoholic-beverages')
    }

    openFilters(){
        this.elements.filterBtn().click()
    }
    
    apply(){
        this.elements.applyBtn().click()
    }
 
}

export const carrefourAlcoholicPage = new CarrefourAlcoholicPage()