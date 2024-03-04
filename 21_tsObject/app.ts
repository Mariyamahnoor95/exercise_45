//task_21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//Define an object for a book
interface book { title: string, author: string, year: number } ;
let book1:  book= {
    title: "War and Peace",
    author: "leo",
    year: 1960
};

// Define another object for a different book
let book2: book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

// Print information about the first book
console.log("Book 1:");
console.log("Title:", book1.title);
console.log("Author:", book1.author);
console.log("Year:", book1.year);

// Print information about the second book
console.log("\nBook 2:");
console.log("Title:", book2.title);
console.log("Author:", book2.author);
console.log("Year:", book2.year);