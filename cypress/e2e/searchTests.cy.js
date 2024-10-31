import { header } from "../POM/header/header";
import { homePage } from "../POM/homePage/homePage";
import { searchPage } from "../POM/searchPage/searchPage";
import { searchPageAssertion } from "../POM/searchPage/searchPageAssertion";
import searchData from "../fixtures/searchData.json"

describe('Search functionality tests', () => {
    beforeEach(() =>{
       homePage.visit()
    })

    it ('should display search when valid term is entered', () => {
      header.enterSearchTerm(searchData.searchTerm1)
        header.clickSearchButton()
        
       searchPageAssertion.assertResultsVisible()
       searchPageAssertion.assertResultContain(searchData.searchTerm1)
    })

    searchData.invalidSearchTerms.forEach((invalidSearchTerm) => {
        it (`should display validation message when invalid search term is entered: ${invalidSearchTerm}`, () =>{
            header.enterSearchTerm(invalidSearchTerm)
            header.clickSearchButton()
           
            searchPageAssertion.assertResultMessage()
    
        })
    })

    it ('should display results when only latin uppercase are entered', () => {
        header.enterSearchTerm(searchData.searchTerm2)
        header.clickSearchButton()
       
        searchPageAssertion.assertResultsVisible()
        searchPageAssertion.assertResultContain(searchData.searchTerm2)
    })

    it ('should display results when only lowercase latin are entered', () => {
        header.enterSearchTerm(searchData.searchTerm3)
        header.clickSearchButton()
       
        searchPageAssertion.assertResultsVisible()
        searchPageAssertion.assertResultContain(searchData.searchTerm3)
    })

})