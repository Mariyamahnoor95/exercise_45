let current_users: string[] = ["Hasan", "bilal", "owais", "mahnoor", "hamza"];
let new_users = ["hasssan", "hasan", "alina", "bushra", "bilal"];
let lowerCaseCurrentUsers = current_users.map((user) => user.toLowerCase());
console.log(lowerCaseCurrentUsers);
for (let user of new_users) {
  let lowerCaseNewuser = user.toLowerCase();
  if (lowerCaseCurrentUsers.includes(lowerCaseNewuser)) {
    console.log(
      `The username '${user}' has already been taken. Please enter a new username.`
    );
  } else {
    console.log(`The username '${user}' is available.`);
  }
}
