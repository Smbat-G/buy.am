import { carrefourAlcoholicPage } from "../POM/carrefourAlcoholicPage/carrefourAlcoholicPage";
import { carrefourAlcoholicPageAssertion } from "../POM/carrefourAlcoholicPage/carrefourAlcoholicPageAssertion";


describe('Filter functionality tests', () => {
    beforeEach(() =>{
       carrefourAlcoholicPage.visit()
    })

    it('Check filter result by branch name', () => {
        carrefourAlcoholicPage.openFilters()
       
        carrefourAlcoholicPage.elements.brandName().click()
        cy.wait(2000)
        carrefourAlcoholicPage.apply()

       carrefourAlcoholicPageAssertion.assertByBrandName('Արարատ')
    })

})


