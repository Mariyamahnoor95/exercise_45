let countries : string[] = ['Afghanistan', 'Sri Lanka', 'Syria', 'Tajikistan', 'Thailand,' , 'Turkey'];
let mountains :string[] = ['Broad Peak','K2','Rakaposhi'];
let rivers : string[] = ['Indus River','Sutlej'];
let language : string[] = ['urdu', 'english', 'arabic'];
let listOfItem = [countries, mountains, rivers, language];
console.log(listOfItem);
countries.forEach((country)=> {
    console.log(country);
})