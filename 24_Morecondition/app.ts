//task24

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let car = "subaru";
let anotherCar = "audi";
let lowerCaseCar = car.toLowerCase();
let number = 10;
let anotherNumber = 15;
let isRaining = true;
let temperature = 25;
let colors = ["red", "blue", "green"];
let anotherColor = "yellow";

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); // True

console.log("Is car != 'audi'? I predict True.");
console.log(car != "audi"); // True

// Tests using the lower case function
console.log("Is lowerCaseCar == 'subaru'? I predict True.");
console.log(lowerCaseCar == "subaru"); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number > 5? I predict True.");
console.log(number > 5); // True

console.log("Is number < 15? I predict True.");
console.log(number < 15); // True

console.log("Is number >= 10? I predict True.");
console.log(number >= 10); // True

console.log("Is number <= 10? I predict True.");
console.log(number <= 10); // True

// Tests using "and" and "or" operators
console.log("Is number > 5 and number < 15? I predict True.");
console.log(number > 5 && number < 15); // True

console.log("Is number > 15 or number < 5? I predict False.");
console.log(number > 15 || number < 5); // False

// Test whether an item is in an array
console.log("Is 'red' in colors? I predict True.");
console.log(colors.includes("red")); // True

// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes(anotherColor)); // True

let myArray = [1, 2, 3];
let myString = "Hello, world!";
let myNumber = 42;

//to check if a variable is an array,
console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myString)); // false
console.log(Array.isArray(myNumber)); // false
