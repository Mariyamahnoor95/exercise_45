
// Define an array to store places to visit
let placesToVisit: string[] = ['pakistan', 'turkey', 'saudia', 'palestine', 'qatar'];

// Print the original array
console.log("Original array:");
console.log(placesToVisit.join(", "));

// Print the array in alphabetical order without modifying the actual list
console.log("\nArray in alphabetical order:");
console.log([...placesToVisit].sort().join(", "));

// Show that the original array is still in its original order
console.log("\nOriginal array after sorting:");
console.log(placesToVisit.join(", "));

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nArray in reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse().join(", "));

// Show that the original array is still in its original order
console.log("\nOriginal array after reverse sorting:");
console.log(placesToVisit.join(", "));

// Reverse the order of the original list
placesToVisit.reverse();
console.log("\nArray after reversing the order:");
console.log(placesToVisit.join(", "));

// Reverse the order of the original list again to return to the original order
placesToVisit.reverse();
console.log("\nArray after reversing the order again:");
console.log(placesToVisit.join(", "));

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nArray after sorting in alphabetical order:");
console.log(placesToVisit.join(", "));

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nArray after sorting in reverse alphabetical order:");
console.log(placesToVisit.join(", "));