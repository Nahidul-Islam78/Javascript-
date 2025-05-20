/*
//object lateral
const student1 = {};
student1.name = 'karimul islam';
student1.roll = 784055;
student1.class = 'two';
console.log(student1);
console.log(student1.roll);

const product = {
  names: 'laptop',
  model: 'hp15ftp8o',
  price: 20000
};
console.log(product);
//object property add and delete
product.id = '1547845695256'
console.log(product);
delete product.price;
console.log(product);

//access object property
//two type of object property access
console.log(product.model);//dot notation type
const key = 'names';
console.log(product[key]);//array notation type
*/
//array of object
/*
const student1 = {
  name: 'nahidul islam',
  roll: 784055,
  semester: '4th',
  GPA: 3.80,
};
const student2 = {
  name: 'mustafizur rhaman',
  roll: 784078,
  semester: '4th',
  GPA: 3.90,
};
const student3 = {
  name: 'arafat ',
  roll: 784081,
  semester: '4th',
  GPA: 4.00,
};
const students = [student1, student2, student3];
console.log(students);
console.log(students[0].name);
*/
/*
const product = [
  { name: 'laptop', price: 20255 },
  { name: 'computer', price: 487555 },
  { name: 'ram', price: 45781 },
  { name: 'tv', price: 48759 }
];
for (let p = 0; p < product.length; p++){
  console.log(`${product[p].name} price(${product[p].price})`);
}
*/

//
/*
const authentication = {
  fname: 'Nahidul',
  lname: 'Islam',
  email: 'mdnahid75@gmail.com',
  greeting: function () {
    return this.fname+" "+ this.lname + ",Welcome sir!";
  }
}
console.log(authentication.greeting());
*/

//একটা family অবজেক্ট বানা। যার মধ্যে একটা প্রোপার্টি হবে father সেটার মানও আরেকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আব্বুর নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটা প্রোপার্টি থাকবে, সেই প্রোপার্টির মানও আরেকটা অবজেক্ট। আর mother-এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother-এর age প্রোপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা।

const isFamily = {
  father: {
    names: 'nurul islam',
    age: 50,
    occupation: 'farmer',
  },
  mother: {
    names: 'Peyara Begum',
    age: 39,
    occupation: 'home maker',
  },
};
const fatherAge = isFamily.father.age;
const motherAge = isFamily.mother.age;
console.log(fatherAge + motherAge);

//create a object for my father
const myFather = {
  names: 'Nurul Islam',
  age: 50,
  occupation: 'Farmer',
  children: {
    firstChildren: 'Prima',
    secundChildren: 'Nahidul'
  }
};
Object.freeze(myFather)
delete myFather.occupation;
console.log(myFather)
if ('occupation' in myFather) {
  console.log('yes!');
} else {
  console.log('no!');
}
console.log(Object.keys(myFather));
console.log(myFather.children.firstChildren);
console.log(Object.entries(myFather));


const person = {
  userName: 'islam',
  userEmail: 'mdnahid45@gmail.com',
  password: 14578255
};
Object.seal(person);
person['password'] = 1478525;
person.age = 45;
console.log(person);

