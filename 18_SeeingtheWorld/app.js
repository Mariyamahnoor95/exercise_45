"use strict";
let worldLocation = ['pakistan', 'turkey', 'saudia', 'palestine', 'qatar'];
let namePerson = 'laiba ashfaq';
console.log(namePerson);
console.log("Hello world");
console.log(`Hello  ${namePerson}, would you like to learn some Python today`);
console.log(namePerson.toLowerCase());
console.log(namePerson.toUpperCase());
const newName = namePerson.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log(newName);
worldLocation.forEach((location) => {
    console.log(location);
});
let alpha = worldLocation.sort();
console.log(alpha);
console.log(worldLocation);
console.log(worldLocation.reverse());
