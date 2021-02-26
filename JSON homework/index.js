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











//using Reduce to find highest price
/* const maxPrice = products.reduce(
  (max, product) => (product.price > max ? product.price : max),0 
);
console.log(maxPrice); */



/* var maxPrice = products.reduce(function (a, b) {
  return Math.max(a.price, b.price);
});
console.log(maxPrice); */
/* let max = 0;
let highestPrice = [];
products.forEach(function(product){
  if (product.price > max) {
    max = product.price;
    highestPrice.push(product.product);
    highestPrice.push(product.best_before);
    highestPrice.push(product.price);
  }
});
console.log(highestPrice); */


/* let maxPrice = products.reduce(function (initial, product,) {
  return Math.max(initial, product);          WRONG
}); */
//console.log(maxPrice);
/* let highestPrice = 0;
let priceList = [];
products.forEach(function (product) {
  if (product.price > highestPrice) {
    highestPrice = product.price;
    priceList.push(product);
  }
});
console.log(priceList); */


/* let nameIt;
function expensiveItem(objectsArray) {
  let mostExpensive = 0;
  //let itemName;
  for (let i = 1; i < objectsArray.length; i++){
    if (objectsArray[i].price > mostExpensive) {
      mostExpensive = objectsArray[i].price;
      nameIt  = objectsArray[i].product;
    }
  }
  //console.log(itemName);
  return itemName;
  
}
console.log(nameIt); */

/* function getMostExp(items) {
  let mostExp = 0;
  let name;

  items.forEach(item => {
   if(item.price > mostExp) {
     mostExp = item.price;
     name = item.itemName;
   }
  });

  return name; 
}
getMostExp(products);
console.log(products) */
