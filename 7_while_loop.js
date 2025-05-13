let number_ = 10;
while (number_ < 20) {
  console.log(number_);
  number_++;
}

let number = 2;
console.log('the 2 to 100 odd number is :')
while (number <= 100) {
  if (number % 2 == 0) {
    console.log(number);
  }
  number++;
}

//একটি while লুপ দিয়ে 1 থেকে 10 পর্যন্ত সংখ্যাগুলো প্রিন্ট করার সময় সংখ্যাগুলাকে 3 দিয়ে গুণ করে ফেলবি। তাহলে কিন্তু 3-এর নামটা হয়ে যাবে। 
let num = 1;
while (num < 11) {
  console.log(`3 X ${num} =${num * 3}`);
  num++;
}
//একটি while লুপ দিয়ে 111 থেকে 110 পর্যন্ত সংখ্যাগুলো প্রিন্ট করার সময় সংখ্যাগুলাকে 2 দিয়ে ভাগ করে ফেলবি। 
let numbers = 109;
while (numbers <111 ) {
  console.log(numbers / 2);
  numbers++;
}
//20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখবি।
let listOfNumber = 20;
let sum = 0;
while (listOfNumber < 41) {
  sum += listOfNumber;
  listOfNumber++;
}
console.log(sum);


//91 থেকে 120 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 10 দিয়ে ভাগ যায়, এমন সংখ্যা পেলে প্রিন্ট করা বন্ধ হয়ে যাবে, থেমে যাবে।

let isNumber = 91;
while (isNumber < 121) {
  if (isNumber % 10==0) {
    break
  }
  console.log(isNumber);
  isNumber++
}