import { carrefourAlcoholicPage } from "../POM/carrefourAlcoholicPage/carrefourAlcoholicPage";
import { carrefourAlcoholicPageAssertion } from "../POM/carrefourAlcoholicPage/carrefourAlcoholicPageAssertion";


describe('Filter functionality tests', () => {
    beforeEach(() =>{
       carrefourAlcoholicPage.visit()
    })

    it('Check filter result by branch name', () => {
        carrefourAlcoholicPage.openFilters()
        carrefourAlcoholicPage.elements.brandNameArarat()
        carrefourAlcoholicPage.apply()

        
    })

})


// import { carrefourAlcoholicPage } from "../POM/carrefourAlcoholicPage/carrefourAlcoholicPage";

// describe('Search by brand Name', () => {
//     beforeEach(() =>{
       
//        carrefourAlcoholicPage.visit()
    
//     })
// it("Search by 'Ararat' brand name", () => {
//     cy.intercept(
//       "GET",
  
//       "https://api.buy.am/products/listing?&o=7&dc=0&f=19-5648&c=1315&skip=0&take=24&isStore=true",
//       {
//         fixture: "getArarat",
//       }
//     );
  
//   });

// }
// )