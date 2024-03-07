const guestList : string[] = ['Bushra','Alina', 'Afsheen', 'Aysha', 'Aashi'];
guestList.forEach((person)=>{
console.log(`Dear ${person}, \n you are cordially invited to dinner. \n We would be honored to have your presence.`)
})
// This will now result in an error because TypeScript knows the index could be undefined.
console.log(guestList[14]);
try {
    console.log(guestList[14]);
} catch (error) {
    console.error("An error occurred:", error);
}

// Define an array with some elements
const myArray: number[] = [1, 2, 3, 4, 5];

// Attempt to access an element using an index that is out of bounds
try {
    console.log(myArray[10]); // This will cause an index error
} catch (error) {
    console.error("An error occurred:", error);
}