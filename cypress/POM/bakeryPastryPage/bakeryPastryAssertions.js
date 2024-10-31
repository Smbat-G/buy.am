import { bakeryPastryPage } from "./bakeryPastryPage";

export default {
  productSortByPrice: {
    fromHighToLow: () => {
      bakeryPastryPage.elements.priceList().each((elem, index, list) => {
        if (index !== list.length - 1) {
          bakeryPastryPage.elements
            .priceByIndex(index)
            .then((currItemPrice) => {
              bakeryPastryPage.elements
                .priceByIndex(index + 1)
                .then((nextItemPrice) => {
                  console.log(currItemPrice.text().split(" ")[0]);
                  expect(
                    +currItemPrice.text().split(" ")[0].replace(/,/g, "")
                  ).to.be.gte(
                    +nextItemPrice.text().split(" ")[0].replace(/,/g, "")
                  );
                });
            });
        }
      });
    },
    fromLowToHigh: () => {
      bakeryPastryPage.elements.priceList().each((elem, index, list) => {
        if (index !== list.length - 1) {
          bakeryPastryPage.elements
            .priceByIndex(index)
            .then((currItemPrice) => {
              bakeryPastryPage.elements
                .priceByIndex(index + 1)
                .then((nextItemPrice) => {
                  console.log(currItemPrice.text().split(" ")[0]);
                  expect(
                    +currItemPrice.text().split(" ")[0].replace(/,/g, "")
                  ).to.be.lte(
                    +nextItemPrice.text().split(" ")[0].replace(/,/g, "")
                  );
                });
            });
        }
      });
    },
  },
};

