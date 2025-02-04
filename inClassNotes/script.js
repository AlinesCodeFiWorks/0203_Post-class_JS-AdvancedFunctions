//1. Callbacks: Passing Functions as Arguments
function processData(number, callback) {
  let result = number + 5; //process the number
  callback(result); //Call the callback function with the result
}
function logResult(result) {
  console.log("Process result: " + result);
}
processData(5, logResult);
//Advantage: making sure that things run in the right order
//2. Arrow Functions: Writing Cleaner Functions
// function double(number){
//   return number*2;
// }
const double = (number) => number * 2;
console.log(double(5));

//3. High-Order Functions:Functions that take functions as arguments
const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num) => num*2);
// console.log(doubled);
// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens);
numbers.forEach((num) => console.log(num));
//4. Timing Functions: Delaying or Repeating Actions
setTimeout(() => {
  console.log("This message is shwon after 3 seconds");
}, 3000);

setInterval(() => {
  console.log("This message is shown every 2 seconds");
}, 2000);
