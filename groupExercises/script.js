// Exercise 1:
// Write a function applyDiscount that takes an array of prices and a callback function.
// The callback should apply a discount to each price.
// After the discount is applied, log the final prices.
const prices = [100, 200, 300, 400];

function applyDiscount(prices, callback) {
  const discountedPrices = prices.map((price) => callback(price));
  console.log(discountedPrices);
}

function discount(price) {
  const discountRate = 0.2; // Applied a 20 percent discount
  return price - price * discountRate;
}

applyDiscount(prices, discount);

//Come back to this one

// logging the final prices with an applied discount
//Output: [80, 160, 240, 360]

//Exercise 2

//Exercise 3
// //Use a map to take an array of strings and return an array where each string is reversed.

// const myArray = ["ABC", "DEF", "HIJ"];
// let indValue;
// let reverseArray = [];
// // let reverseArray = myArray.map((num) => num);
// // console.log(myArray.reverse());
// console.log(myArray.map());

//Use map to pass the array of strings through
//Split(),reverse(), join() and store the individual values in a working variable titled here indValue
//Then store the reversed strings in the new array reverseArray

//Exercise 4
//Use filter to return only the odd numbers from an array of integers.
// const myNumbers = [1, 2, 3, 4, 5]; //Declared an afray with numbers
// const oddNumbers = myNumbers.filter((num) => num % 2 === 1); //

// console.log(oddNumbers);
//Exercise 5
//Write a function that uses setTimeout to log "Task completed!" after a 5-second delay. Additionally, set up a setInterval to log "Still waiting..." every 2 seconds.
