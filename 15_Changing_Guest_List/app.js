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
// Print the updated invitations
console.log("\nUpdated invitations:");
guestList.forEach((person) => {
    console.log(`Dear ${person}, you are cordially invited to dinner. We would be honored to have your presence.`);
});
