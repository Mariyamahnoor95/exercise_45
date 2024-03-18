/**Start with a copy of your program from Exercise 39. Write a function called make_great() 
 that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 *  Call show_magicians() to see that the list has actually been modified. */

let MagiciansNAme: string[] = ["dev", "alice", "elbert"];

function show_magicians(magicians: string[]): void {
  magicians.forEach((element) => {
    console.log(element);
  });
}

function make_great(magicians: string[]): void {
  magicians.forEach((element, index) => {
    magicians[index] = element + " the Great";
  });
}
console.log("magician");

show_magicians(MagiciansNAme);

make_great(MagiciansNAme);
console.log("magician \n");
show_magicians(MagiciansNAme);
