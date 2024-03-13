"use strict";
/*If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
let usernames = ["hasan", "admin", "owais", "mahnoor", "hamza"];
for (let username of usernames) {
    {
        if (username === "admin") {
            console.log(`Hello ${username} , would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again`);
        }
    }
}
while (usernames.length > 0) {
    usernames.pop();
    console.log("removing users");
}
if (usernames.length == 0) {
    console.log("We need to find some users!");
}
