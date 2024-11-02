import { carrefourAlcoholicPage } from "./carrefourAlcoholicPage";
import { carrefourAlcoholicPageLocators } from "./carrefourAlcoholicPageLocators";

class CarrefourAlcoholicPageAssertion {
    assertByBrandName(brandName){
    carrefourAlcoholicPage.elements.productItem().then(products => {
        products.each((index,element) => {
          
            console.log(element.innerText);
            expect(cy.wrap(element)).to.contain(brandName)

            //element.should('contain.text', brandName)
           //cy.wrap(element).contains(brandName)

        });
    })

    }
}





export const carrefourAlcoholicPageAssertion = new CarrefourAlcoholicPageAssertion()