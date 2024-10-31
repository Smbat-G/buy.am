import { searchPageLocators } from "./searchPageLocators";

class SearchPage {
    elements = {
        searchResult: () => { return cy.get(searchPageLocators.searchResult) },
        emptyResult: () => { return cy.get(searchPageLocators.emptyResult)}
    }

}

export const searchPage = new SearchPage()