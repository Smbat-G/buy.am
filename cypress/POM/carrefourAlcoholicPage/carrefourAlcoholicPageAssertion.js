import { carrefourAlcoholicPage } from "./carrefourAlcoholicPage";
import { carrefourAlcoholicPageLocators } from "./carrefourAlcoholicPageLocators";

class CarrefourAlcoholicPageAssertion {
  brandName = "Ararat";
  assertProductsBrand(brandName) {
    cy.request({
      method: 'GET',
      url: 'https://buy.am/undefined/supermarkets/carrefour/alcoholic-beverages',
      qs: {
        brand: brandName  
      }
    }).then((response) => {
      response.body.products.forEach((product) => {
        expect(product.brand).to.eq(brandName);
      });
    });
  }

}



export const carrefourAlcoholicPageAssertion = new CarrefourAlcoholicPageAssertion