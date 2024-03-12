"use strict";
let car = 'subaru';
let number = 10;
let isRaining = true;
let temperature = 25;
// Test 1: Checking for equality
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2: Checking for inequality
console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi'); // True
// Test 3: Checking for strict equality
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
// Test 4: Checking for strict inequality
console.log("Is car !== 'audi'? I predict True.");
console.log(car !== 'audi'); // True
// Test 5: Checking if a number is greater than another
console.log("Is number > 5? I predict True.");
console.log(number > 5); // True
// Test 6: Checking if a number is less than another
console.log("Is number < 15? I predict True.");
console.log(number < 15); // True
// Test 7: Checking if a boolean is true
console.log("Is isRaining true? I predict True.");
console.log(isRaining); // True
// Test 8: Checking if a boolean is false
console.log("Is isRaining false? I predict False.");
console.log(!isRaining); // False
// Test 9: Checking if a number is within a range
console.log("Is temperature between 20 and 30? I predict True.");
console.log(temperature > 20 && temperature < 30); // True
// Test 10: Checking if a number is not within a range
console.log("Is temperature not between 10 and 20? I predict False.");
console.log(temperature < 10 || temperature > 20); // False
