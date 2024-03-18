/**Start with your work from Exercise 40.
 * Call the function make_great() with a
 * copy of the array of magicians’ names.
 * Because the original array will be unchanged, return the new array and store it in a separate array.
 * Call show_magicians() with each array to show that you have one array of the original names and one array with
 * the Great added to each magician’s name. */

/**Start with a copy of your program from Exercise 39. Write a function called make_great() 
 that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 *  Call show_magicians() to see that the list has actually been modified. */

let MagiciansNAme: string[] = ["dev", "alice", "elbert"];

function show_magicians(magicians: string[]): void {
  magicians.forEach((element) => {
    console.log(element);
  });
}

function make_great(magicians: string[]): string[] {
  return magicians.map((l: string) => l + " the Great");
}
console.log("magician");

show_magicians(MagiciansNAme);

const newMagicians: string[] = make_great(MagiciansNAme);
console.log("\n magician with great \n");
show_magicians(newMagicians);
