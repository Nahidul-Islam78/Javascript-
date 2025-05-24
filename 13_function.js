
/*
function maxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxNumber(78, 54, 96));
*/
//pat arrow function use
/*
const oddEven = (number) => {
  if (number % 2 == 0) {
    return "the number is odd";
  } else {
    return 'the number is even';
  }
  
}
console.log(oddEven(89));
*/
//function is first class citizen
/*
function hello(name) {
  console.log("welcome", name);
}
const hmm = hello;
hmm('nahidul');
*/


//callback function
/*
function names(str, cb) {
  const result = str.toUpperCase();
  cb(result);
  
}
names('nahid', (str) => {
  console.log(str, 'welcome');
  
})
*/
/*
//return function

function isOdd() {
  const odd = (n) => n % 2 === 0;
  return odd;
}
console.log(isOdd()(5));
*/
const square = (n)=>{
  const result = n * n;
  return result;
}
console.log(square(3));

const exponentiation = (r) => {
  const result = r ** r;
  return result;
}
console.log(exponentiation(3));


function mobileUseTime(n) {
  console.log(arguments);
  return n * 30;
}
console.log(mobileUseTime(4, 3, 2));
function birthYear(year) {
  return year + 100;
}
console.log(birthYear(2005));

function toString(n) {
  
  return n.length;
}
console.log(toString("Hello World"));

function toArray(a) {
  const size = a.length;
  if (size % 2 == 0) {
    return "array number is even";
  } {
    return "array number is odd";
  }
}
const array = [1, 2, 89, 75, 64];
console.log(toArray(array));

function toName(name) {
  return name[0];
}
console.log(toName('Nahid'));


function sumArray(m) {
  return m[0] + m[1];
}
console.log(sumArray(array));

function isName(a, b) {
  const aSize = a.length;
  const bSize = b.length;
  if (aSize > bSize) {
    return true;
  } {
    return false;
  }
}
const firstName = 'Karim';
const lestName = 'Rahim';
console.log(isName(firstName, lestName));


function evenTotalNumbers(arr) {
  let sum=0;
  for (numberr of arr) {
    if (numberr % 2 === 0) {
      sum += numberr;
    }
  }
  return sum;
}
const arr = [36, 45, 12];
console.log(evenTotalNumbers(arr))

function mailToKm(m) {
  return m * 1.609;
}
console.log(mailToKm(45));

function kmToMail(k) {
  return k / 1.609;
}
console.log(kmToMail(72.405));

function hourToSecund(h) {
  return h * 60 * 60;
}
console.log(hourToSecund(1));

function countTax(incomeAccount) {
  if (incomeAccount > 200000) {
    return 40;
  } else if(incomeAccount>=100001&&incomeAccount<=200000){
    return 30;
  } else if (incomeAccount >= 50001 && incomeAccount <= 100000) {
    return 20;
  } else if(incomeAccount>=50000){
    return 10;
  }
}
const income = countTax(51230);
console.log(income);

function countOfLeapYear(year) {
  const leapYear = [];
  for (y of year) {
    if (y % 400 === 0) {
      leapYear.push(y);
    } else if (y % 100 !== 0 && y % 4 == 0) {
      leapYear.push(y);
    } 
  }
  return leapYear.length;
}


const years = [2050, 2054, 2024, 2025, 2100, 2020, 2028];
console.log(countOfLeapYear(years));

function oddAverageNumber(rry) {
  const oddRry = [];
  for (n of rry) {
    if (n % 2 !== 0) {
      oddRry.push(n);
    }
  }
  let sum = 0;
  for (o of oddRry) {
    sum += o;
  }
  const count=oddRry.length
  if (count === 0) {
    return 0;
  }
  const result = sum / count;
  
  return result.toFixed(2);
}
const number = [10,20,45.58,36,45.123,30,62];
console.log(oddAverageNumber(number))


function oddNumber(num) {
  const odd = [];
  for (n of num) {
    if (n % 2 === 1) {
      n -= 1;
      odd.push(n);
    }
  }
  return odd
}
const numb = [12, 3, 4, 78, 8, 9, 45];
console.log(oddNumber(numb));


const roll = [1, 5, 7, 1, 8, 9, 1, 3, 5, 7, 5, 79];
function single(m) {
  const newRoll = [];
  for (let i = 0; i < m.length; i++){
    if (i === m.indexOf(m[i])) {
      newRoll.push(m);
    }
  }
  return newRoll
}
console.log(single(roll));

function sumNumbers(a=0,b=0,c=0) {
  return a + b + c;
}
console.log(sumNumbers(20, 30));
function books(names = { price: 10,quantity:1}) {
  return names;
}
console.log(books());

function num(arr) {
  if (arr === undefined) {
    return [5, 10, 15];
  } {
    const newArr = [];
    for (n of arr) {
      n *= 2;
      newArr.push(n);
    }
    return newArr;
  }
  
}
console.log(num([10, 20, 30]));

const title = 'Welcome';
const body = 'This is a dynamic template.';
const html = `<div>
<h1>${title}</h1>
<p>${body}</p>
</div>`;
console.log(html);

///////////////arrow function ///////////////
const sum = (a, b) => a + b;
console.log(sum(4, 5));


const firstSumLest = (arr) => arr[0]+arr[arr.length-1];
console.log(firstSumLest([10, 15, 8, 7,2]));

const noParameter = () => 'unKnown';
console.log(noParameter());
const customer = {
  names: "Islam",
  amount: 536915
};
const customerAmount = customer.amount;
const division = (taka) => taka / 5;
console.log(division(customerAmount));


const operation = (a, b) => [a + b, a - b, a * b, a / b];
const [addition, subtraction, multiplication, divisions] = operation(9, 6);
console.log(multiplication);

function multiply(a, b) {
  return [a * 5, b * 9];
}
const [firstMultiply, secundMultiply] = multiply(6, 5);
console.log(firstMultiply, secundMultiply);


