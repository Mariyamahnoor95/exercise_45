/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of
 independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

// Define an array of favorite fruits
let favorite_fruits = ["bananas", "apples", "oranges"];

// Define the fruits to check for
let fruit1 = "bananas";
let fruit2 = "grapes";
let fruit3 = "apples";
let fruit4 = "kiwis";
let fruit5 = "oranges";

// Check if each fruit is in the favorite_fruits array
if (favorite_fruits.includes(fruit1)) {
  console.log(`You really like ${fruit1}!`);
}

if (favorite_fruits.includes(fruit2)) {
  console.log(`You really like ${fruit2}!`);
}

if (favorite_fruits.includes(fruit3)) {
  console.log(`You really like ${fruit3}!`);
}

if (favorite_fruits.includes(fruit4)) {
  console.log(`You really like ${fruit4}!`);
}

if (favorite_fruits.includes(fruit5)) {
  console.log(`You really like ${fruit5}!`);
}
