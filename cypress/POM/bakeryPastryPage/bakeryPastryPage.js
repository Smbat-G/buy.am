import { bakeryPastryPageLocators } from "./bakeryPastryPageLocators";

class BakeryPastryPage{
elements = {
    productList: () => { return cy.get(bakeryPastryPageLocators.productList) },
    priceList: () => { return cy.get(bakeryPastryPageLocators.priceList) },
    priceByIndex: (index = 0) => { return this.elements.priceList().eq(index) },
    filterBtn: () => { return cy.get(bakeryPastryPageLocators.filterBtn) },
    highPrice: () => { return cy.get(bakeryPastryPageLocators.highPrice) },
    lowPrice: () => { return cy.get(bakeryPastryPageLocators.lowPrice) },
    applyBtn: () => { return cy.get(bakeryPastryPageLocators.applyBtn) }
}

openFilters(){
    this.elements.filterBtn().click()
}

sortBy = {
    fromLowToHigh: () => { this.elements.lowPrice().check({force: true})},
    fromHighToLow: () => { this.elements.highPrice().check({force: true})}
}

apply(){
    this.elements.applyBtn().click()
    cy.wait(3000)
}

visit(){
    cy.viewport(1280, 720)
    cy.visit('/undefined/supermarkets/carrefour/bakery-pastry')
    cy.wait(5000)
}

}

export const bakeryPastryPage = new BakeryPastryPage()