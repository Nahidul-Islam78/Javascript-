/*for (i = 1; i < 100; i+=2){
  console.log(i);
  
}*/
sum = 0;
for (let m = 1; m < 6; m++){
  console.log('sum=' , sum , 'm=' ,m , 'sum+m=' , sum + m);
  sum += m;
  
}
console.log(`the sum is ${sum}`);


let m = 0;
for (; m < 15; m++){
  console.log(m)
}
console.log(m);

//0 থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 9 এবং 6 দিয়ে বিভাজ্য
let result = 0;
for (let i = 0; i <= 100; i++){
  if (i % 9 == 0 && i % 6 == 0) {
    console.log(i);
    result += i;

  }
}
console.log(result);


//তুই 1 থেকে 40 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু এমনভাবে, যেন 7 দিয়ে বিভাজ্য সংখ্যাগুলো বাদ যায়। যেমন- 7, 14, 21, ইত্যাদি বাদ যাবে। একটা প্রোগ্রাম লিখ, যেখানে এই সংখ্যাগুলো স্কিপ হবে।

for (let num = 1; num < 41; num++){
  if (num % 7 == 0) {
    continue
  }
  console.log(num);
}