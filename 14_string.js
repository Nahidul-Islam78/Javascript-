//string length property
/*let names = 'Md Nahidul Islam';
console.log(names.length);*/

/*
//template string 
//note: Templates are not supported in Internet Explorer.
let introduction = `I'm Nahid.I,m nineteen years old.I'm reading diploma in engineering at "Feni Computer Institute".My department is computer science technology`;
console.log(introduction)

*/
//Escape characters in string
let instituteName = "\"Feni Computer institute\"";
console.log(instituteName);

/////string method///////////////
/*
     //access characters
let country = 'Bangladesh';
console.log(country.at(0));//modern js
console.log(country.charAt(2));
                          //at() & charAt() different is a charAt() not allows negative index.
console.log(country[4]);
console.log(country.charCodeAt(1));//access characters code

 */

/*
//extracting string parts
let str = "I love Bangladesh";
console.log(str.slice(7, 17)); //starting 0,ending 1
console.log(str.substring(2, 6));
*/
/*
//convert case
let str = "karimul";
console.log(str.toUpperCase());
*/
/*
//string concat
let introduction = "My".concat(" ", "name is ")+ "Nahidul";
console.log(introduction);
*/
/*
//remove whitespace
let countryName = "     Bangladesh    ";
console.log(countryName.trim());
console.log(countryName.trimStart());
console.log(countryName.trimEnd());

*/

/*
let str = "5";
console.log(str.padStart(3, 0));
console.log(str.padEnd(8, 1));
*/

/*
//string repeat
let str = "Islam ";
console.log(str.repeat(5));
*/

/*
//string replace
let str = "My name is Nahid";
console.log(str.replace("Nahid", "Karim"));
*/

//string split make array
/*let str = "My father name is Nurul Islam"
console.log(str.split(" "))
*/

////////////////// string search ////////////////
let str = "A quick the brown fox jumps the lazy dog the";
console.log(str.lastIndexOf('the', 11));
console.log(str.indexOf('the',11))
/*console.log(str.indexOf('the'));
console.log(str.indexOf('the', 30));
console.log(str.lastIndexOf('the'));*/
console.log(str.search('quick'));
console.log(str.includes('quick')); //includes are return boolean value
console.log(str.includes('quick', 3));
console.log(str.startsWith('A'));
console.log(str.startsWith('A', 1));
console.log(str.endsWith('the'));
console.log(str.endsWith('the',15));
let names = "Nahidul";
let Result = "A+";
let displayResult = `Congress ${names}!Your grad is ${Result}.`;
console.log(displayResult);
