/** Make a array of magician’s names.
 * Pass the array to a function called show_magicians(), which prints the name of each magician in the array */

let MagiciansNAme: string[] = ["dev", "alice", "elbert"];

function show_magicians(magicians: string[]): void {
  
    magicians.forEach((element) => {
    console.log(element);
  });
}

show_magicians(MagiciansNAme);