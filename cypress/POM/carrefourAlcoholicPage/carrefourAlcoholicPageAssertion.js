import { carrefourAlcoholicPage } from "./carrefourAlcoholicPage";
import { carrefourAlcoholicPageLocators } from "./carrefourAlcoholicPageLocators";

class CarrefourAlcoholicPageAssertion {
    assertByBrandName(brandName){
    carrefourAlcoholicPage.elements.productItem().then(products => {
        products.each((index,element) => {
          
            console.log(element.innerText);
            cy.wrap(element).should('include.text', brandName);

        });
    })

    }
}


export const carrefourAlcoholicPageAssertion = new CarrefourAlcoholicPageAssertion()