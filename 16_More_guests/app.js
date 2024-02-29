"use strict";
let guestList = ['hiba', 'Bushra', 'Alina', 'Afsheen', 'Aysha', 'Aashi'];
console.log("Initial invitation");
guestList.forEach((person) => {
    console.log(`Dear ${person}, \n you are cordially invited to dinner. \n We would be honored to have your presence.`);
});
//print the name of the guest who can't make it
let absentGuest = "Afsheen";
console.log(` \n Unfortunately, ${absentGuest} can't make it to the dinner.`);
// Replace the absent guest with the new person you are inviting
let indexOfAbsentGuest = guestList.indexOf(absentGuest);
if (indexOfAbsentGuest !== -1) {
    guestList.splice(indexOfAbsentGuest, 1, 'Urooj');
}
// Print the updated invitations
console.log("\nUpdated invitations:");
guestList.forEach((person) => {
    console.log(`Dear ${person}, you are cordially invited to dinner. We would be honored to have your presence.`);
});
console.log('Good news! fabiha ,sohira,faheema found a bigger dinner table.');
// Add one new guest to the beginning of the array
guestList.unshift('fabiha');
// Use push() to add one new guest to the end of your list
guestList.push('faheema');
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, 'sohira');
// Print the updated invitations
console.log("\nUpdated invitations found for bigger dinner table:");
guestList.forEach((person) => {
    console.log(`Dear ${person}, you are cordially invited to  bigger dinner table. We would be honored to have your presence.`);
});
