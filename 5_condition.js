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
console.log("the GPA is :" + students?.gpa);//return undefine

//শার্টের দাম 1000 টাকার বেশি হলে এবং কুপন থাকলে তোকে 20 পারসেন্ট ডিসকাউন্ট দেয়া হবে। এর জন্য প্রোগ্রাম লিখ।
const shirtPrice = 1080;
const coupon = true;
if (shirtPrice > 1000 && coupon == true) {
  console.log('you can got 20 present discount');
} else {
  console.log("SORRY! you cna't got any discount ");
}

//তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে 5% ডিসকাউন্ট, আর 6000 টাকার বেশি কেনাকাটা করলে 15% ডিসকাউন্ট দিবি। যদি এক বন্ধু এসে 4500 টাকার জিনিস কিনে, তবে তাকে কত টাকা দিতে হবে?

const shoppingPrice = 4500;
if (shoppingPrice > 6000) {
  let discountPrice = shoppingPrice / 100 * 15;
  let totalPrice = shoppingPrice - discountPrice;
  console.log(`you total shopping amount is ${totalPrice}`);
} else if (shoppingPrice > 3000) {
  let discountPrice = (shoppingPrice / 100) * 5;
  let totalPrice = shoppingPrice - discountPrice;
  console.log(`you total shopping amount is ${totalPrice}`);
} else {
  console.log(`your total shopping amount is ${shoppingPrice}`);
}