import { searchPage } from "./searchPage";
import { searchPageLocators } from "./searchPageLocators";

class SearchPageAssertion  {
    assertResultsVisible(){
        searchPage.elements.searchResult().should('be.visible')
     }
     
     assertResultContain(term){
         searchPage.elements.searchResult().should('contain.text', term)
     }
     
     assertResultMessage() {
         searchPage.elements.searchResult().should('contain.text', 'Ոչինչ չի գտնվել')
     }

     assertNoSearchResults(){
        searchPage.elements.searchResult().should('not.exist')
     }

}

export const searchPageAssertion = new SearchPageAssertion()