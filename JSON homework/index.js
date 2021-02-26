var products = 
[ {
"product": "Milk, 1L carton",
"best_before": "2018-10-04",
"price": 15.5
},
{
"product": "Milk, 1L carton",
"best_before": "2018-10-04",
"price": 15.5
},
{
"product": "Eggs 12pcs",
"best_before": "2018-10-04",
"price": 35.0
},
{
"product": "Swedish meatballs",
"best_before": "2018-10-25",
"price": 22.0
    }];
 
//find the item with the lowest price using "Map"
function cheapestItem(products) {
  const itemWithLowestPrice = [];
  const prices = products.map((product) => {
    return product.price;
  });
  const lowestPrice = Math.min(...prices);
  for (let i = 0; i < products.length; i++) {
    if (products[i].price === lowestPrice) {
      itemWithLowestPrice.push(products[i]);
    }
  }
  //convert from JavaScript object to a JSON string
  return JSON.stringify(itemWithLowestPrice);
}
console.log(cheapestItem(products));


//Find the item with the highest price Using "Map"
function highestPriceItem(products) {
  const itemWithHighestPrice = [];
  const prices = products.map((product) => {
    return product.price;
  });
  const highestPrice = Math.max(...prices);
  for (let i = 0; i < products.length; i++) {
    if (products[i].price === highestPrice) {
      itemWithHighestPrice.push(products[i]);
    }
  }
  //convert from JavaScript object to a JSON string
  return JSON.stringify(itemWithHighestPrice);
}
console.log(highestPriceItem(products));
