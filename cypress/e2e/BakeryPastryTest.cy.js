import { bakeryPastryPage } from "../POM/bakeryPastryPage/bakeryPastryPage"
import bakeryPastryAssertions from "../POM/bakeryPastryPage/bakeryPastryAssertions"

describe('Search functionality tests', () => {
    beforeEach(() =>{
       
       bakeryPastryPage.visit()
    
    })

    it ('should display search when valid term is entered frm high to low', () => {
       
        bakeryPastryPage.openFilters()
        
        bakeryPastryPage.sortBy.fromHighToLow()
        bakeryPastryPage.apply()
       
        bakeryPastryAssertions.productSortByPrice.fromHighToLow()
    })


    it ('should display search when valid term is entered from low to high', () => {
       
        bakeryPastryPage.openFilters()
        
        bakeryPastryPage.sortBy.fromLowToHigh()
        bakeryPastryPage.apply()
       
        bakeryPastryAssertions.productSortByPrice.fromLowToHigh()
    })


})