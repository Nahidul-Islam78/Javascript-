let num = 15;
let copy = num;
console.log(num, copy);  

////

const arr = [1, 2, 3];
const newArr = arr;
newArr.push(88);
console.log(arr, newArr);


// the primitive data type pase by value
const addition = (Number)=>{
  Number = 10;
  console.log(Number);
}
const number = 20;
console.log(addition(number));
console.log('number is: ', number);

//the non-primitive data type pase by reference

const students = (data) => {
  data.name = 'kami';
  data.age = 12;
};
const newData = {
  name: 'limon',
  age:12
};
console.log(newData);
students(newData);
console.log(newData);

const student = {
  name: 'serious sojib',
  roll: 1,
  masas: 99,
  marks: null
}
console.log(student.name);
console.log(student.marks);




