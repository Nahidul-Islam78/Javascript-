
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
console.log(square(45));
