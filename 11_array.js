//use to lateral pattern array/////////

/*const number = [];
number[0] = 1;
number[1] = 2;
number[2] = 3;
number[3] = 4;
number[4] = 5;
number[5] = 6;
number[6] = 7;
console.log(number);
console.log(number.length);
number[number.length] = 8;
console.log(number);



const namer = [
  'nahidul','karimul','jahidul'
]

console.log(namer);
namer[namer.length] = 'rina';
console.log(namer)
console.log(namer.length);*/

//use to constructor pattern/////////
//this pattern use select array length

/* const n1 = new Array(5);
console.log(n1, n1.length);
n1[3] = "jahid";
console.log(n1);
*/


//use array factory pattern//////
/*
const n2 =Array(5);
console.log(n2, n2.length);
n2[3] = 'jahid';
n2[7]='hamim'
console.log(typeof n2);
*/

//array traversing///////
/*
const a = [1, 2, 3, 4, 5];

sum = 0;
for (let m = 0; m < a.length; m++){
  sum += a[m];

}
console.log(sum);
console.log(sum / a.length);
*/
/*const a = [1, 2, 3, 4, 5,6,7];
for (let value = 0; value < a.length;value++) {
  console.log(a[value]);
}*/



// larges number make and secund larges number make///////

/*

const marks = [78, 45,57, 84, 65, 28, 49, 78, 48, 57, 99, 55, 48, 72];
let largesMarks = marks[0];
for (let i = 1; i < marks.length; i++){
  if (largesMarks < marks[i]) {
    largesMarks = marks[i];
  }
  
}
console.log("the larges marks is :" + largesMarks);

let secundLargeMarks = marks[0];
for (let i = 1; i < marks.length; i++) {
  if (secundLargeMarks < marks[i] && largesMarks > marks[i]) {
    secundLargeMarks = marks[i];
  }
}
console.log("the secund larges marks is:" + secundLargeMarks);

*/

/// array element update////////


/*const number = new Array(10);
for (let i = 0; i < number.length; i++){
  number[i]= 4;
  
}
console.log(number); 
*/

/*
const nm = new Array(5);
nm.fill("nahid");
nm.push('karim')
nm.pop(nm[2]);
console.log(nm);
*/

/*
const names = ['jabed', 'laden', 'karim'];
names[0] = 'said';
console.log(names);
*/
/*
//array fill and update of random number

const response = new Array(15);
response.fill(0);
for (let i = 0; i < response.length; i++){
  const random = Math.floor(Math.random() * 10 + 0);
  response[i] = random > 5 ? true : false;
  
}
console.log(response);
*/

// array of arrays       --multidimensional array
/*
const pointTable = [
  [4, 5],
  [3, 2],
  [1, 0],
  [9, 4],
];
//two dimensional traverse
for (let i = 0; i < pointTable.length; i++){
  for (let k = 0; k < pointTable[i].length; k++){
    console.log(`${pointTable[i][k]}`);
  }
}
*/


/*
//one dimensional traverse

for (let i = 0; i < pointTable.length; i++){
  //console.log('point',i,'-','x=' + pointTable[i][0], 'and y=' + pointTable[i][1]);
  console.log(`point${i} - x=${pointTable[i][0]} and y=${pointTable[i][1]}`);
}
*/

/*
const marks = [
  [90, 85, 75, 48],
  [45, 84, 93, 59],
  [58, 75, 69, 68],
];
for (let i = 0; i < marks.length; i++){
  console.log(`bangla=${marks[i][0]} english=${marks[i][1]} math=${marks[i][2]} java=${marks[i][3]} total marks=` + (marks[i][0] + marks[i][1] + marks[i][2] + marks[i][3]));
}
//two dimensional traverse
for (let i = 0; i < marks.length; i++){
  for(let j = 0; j < marks[i].length; j++){
    console.log(`points[${i},${j}]=${marks[i][j]}`);
  }
}
*/
//matrix sum
/*
const matrixX = [
  [3, 5],
  [8, 5],
  [4, 5],
  [2, 3]
];
const matrixY = [
  [2, 4],
  [8, 9],
  [3, 6],
  [1, 0]
  
];

const matrixQ = [
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],

];
function matrixSum(matrixQ, matrixY) {
  const result = [];
  for (let i = 0; i < matrixY.length; i++) {
    const row = [];
    for (let j = 0; j < matrixY[i].length; j++) {
      row.push(matrixQ[i][j] + matrixY[i][j]);
    }
    result.push(row);
  }
  return result;
}
const matrixZ = matrixSum(matrixQ, matrixY);
console.log(matrixZ);
*/

//convert array to string
const fruits = ['apple', 'banana', 'lichi', 'mango'];
let strFruits = fruits.toString();
console.log(fruits);
console.log(typeof strFruits);

//use forEach method
function fruitsName(value) {
  console.log(value);
}
fruits.forEach(fruitsName);

//use Array.isArray(arrayName) & instanceof operator Recognize an Array
console.log(Array.isArray(fruits));
console.log(strFruits instanceof Array);
///////////////////////array method//////////////////////////////////////
const animals = ['dog', 'cat', 'lion', 'cow', 'fox'];
console.log(animals.at(3));
let joinArray = (animals.join("+"));
console.log(typeof joinArray);
animals.push("ox");
console.log(animals);
animals.pop();
console.log(animals);
animals.unshift("ox");
console.log(animals);
animals.shift();
console.log(animals);
animals[0] = 'crow'; //change array element
console.log(animals);
/////
const animals2 = ['manky', 'hen'];
const allAnimals = animals2.concat(animals);
console.log(allAnimals);
// two dimensional to one dimensional array
const myArray = [[1, 2], [3, 4, 5], [6, 7, 8]];
console.log(myArray);
const newArray = myArray.flat();
console.log(newArray);
console.log(newArray.flatMap(x => [x * 5]));



//
fruits.splice(3, 1, 'papaya'); 
console.log(fruits);
fruits.splice(3, 1);
console.log(fruits)
const jackFruits = fruits.toSpliced(0, 1);
console.log(jackFruits);


//////////// array sort///////////////////////////////////
const studentsName = ['Karim', 'Islam', 'Nahid', 'Jahed', 'Marup'];
console.log(studentsName);
console.log(studentsName.toSorted())  //toSorted return new array
console.log(studentsName.sort()); 
console.log(studentsName.toReversed())  //create new array      
console.log(studentsName.reverse());

//numeric sort
const number = [23, 56, 14, 5, 78, 3, 87, 45, 26, 14];
console.log(number.sort(function (a, b) { return a - b })); //compare function return positive ,negative & zero 
console.log(number.sort((m, n) => {
  return n-m;
  
}))
console.log(`the maximum number is :${Math.max.apply(null, number)}`);
console.log('the small number is : ' + Math.min.apply(null, number));

//////////////////Array iteration////////
//forEach method
function myNumber(index, value, array) {
  console.log(value);
  console.log(index);
  console.log(array);
}
number.forEach(myNumber);
//map() method
function squareNumbers(value) {
  console.log(value * value);
}
number.map(squareNumbers);
//filter method 
function bigNumber(value) {
  return value > 30;
}
console.log(number.filter(bigNumber));

function sumNumbers(total,value) {
  return total+value;
}
console.log(number.reduce(sumNumbers));
console.log(number.indexOf(78));
////////////destructuring array////
const numr = [25, 36, 25, 48, 49];
const [first] = numr;
console.log(first);
///////
const color = ['red', 'green', 'blue', 'yellow'];
const [ , secundColor, ,] = color;
console.log(secundColor );



