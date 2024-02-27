"use strict";
let guestList = ['Bushra', 'Alina', 'Afsheen', 'Aysha', 'Aashi'];
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
// Print informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table. More space is now available.");
// Add one new guest to the beginning of the array
guestList.unshift("fabiha");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "maha");
// Use push() to add one new guest to the end of your list
guestList.push("atiqa");
// Print the updated invitations
//you can invite only two people for dinner.
console.log("Unfortunately,can't make it to the dinner for all only two people are invited.");
// Remove guests one by one until only two names remain
while (guestList.length > 2) {
    // Remove the last guest from the list
    let removedGuest = guestList.pop();
    // Print a message to the removed guest
    console.log(`Sorry ${removedGuest}, I'm afraid I can't invite you to dinner.`);
}
console.log("\nUpdated invitations:");
guestList.forEach((person) => {
    console.log(`Dear ${person}, you are cordially invited to dinner. We would be honored to have your presence.`);
});
