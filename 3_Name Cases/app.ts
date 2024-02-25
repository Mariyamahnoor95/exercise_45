let personName : string = 'Hamza khan';
console.log("lower case ", personName.toLowerCase())
console.log("upper case ",personName.toUpperCase())
console.log("title case ",personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" "));
