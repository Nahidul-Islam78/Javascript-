//conditional statement
   // if / else if / else
const applePrice = 377;
const bananaPrice = 377;
if (applePrice > bananaPrice) {
  console.log('the apple price is high');
} else if (bananaPrice>applePrice) {
  console.log('the banana price is high');
} else {
  console.log('this both are same price');
}


//conditional operator (ternary operator)

const boy = 'younger';
/*
let eat = boy == 'children' ? 'sirup' : 'capsule';
//variable=condition?c_true_result:c_false_result;
console.log(eat);
*/
let eat = boy == 'children' ? 'sirup' : 'capsule';
//
const customer = 'man';
let says = customer == 'women' ? 'hello mem!' : 'hello sir!';
console.log(says + 'can i help you?');

//Nullish Coalescing Operator (??)
const Roll = 45;
const text = 'Messing'
const Result = Roll ?? text;
console.log(`The roll is ${Result}`);

//Optional Chaining Operator (?.)
const students = {
  names: 'karim',
  Roll: 78,
  class: "Four"
}
console.log("the GPA is :" + students?.gpa);  //return undefine
