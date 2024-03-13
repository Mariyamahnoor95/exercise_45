"use strict";
let current_users = ["Hasan", "bilal", "owais", "mahnoor", "hamza"];
let new_users = ["hasssan", "hasan", "alina", "bushra", "bilal"];
let lowerCaseCurrentUsers = current_users.map((user) => user.toLowerCase());
console.log(lowerCaseCurrentUsers);
for (let user of new_users) {
    if (current_users.includes(user)) {
        console.log(`The username '${user}' has already been taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${user}' is available.`);
    }
}
