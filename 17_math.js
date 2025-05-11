let pri = Math.PI;
console.log(pri);
let e = Math.E;
console.log(e);   
let s = Math.SQRT2;
console.log(s);
let r = Math.round(4.4); //return 4
console.log(r);
let m = Math.ceil(4.1); //return 5
console.log(m);
let f = Math.floor(4.9); //return 4
console.log(f);

let t = Math.trunc(4.9);
console.log(t);

let y = Math.sign(-4.3);//return -1 1 & 0
console.log(y);

let power = Math.pow(3, 3);
console.log(power);
let root = Math.sqrt(25);
console.log(root);
let z = Math.abs(-3.5); //return positive value 3.5
console.log(z);
let big = Math.max(10, 2, 36, 45, 21, 19, 2);
console.log(big);
let small = Math.min(45, 15, 6, 23, 78, 45);
console.log(`the small number is : ${small}`);
let random = Math.random();
console.log(random);
////////////////////////////////random///////////////////
let random1 = Math.floor(Math.random() * 10);
console.log(random1);
for (let i = 0; i < 25; i++){
  let random3 = Math.floor(Math.random() * 500);
  console.log(random3)
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min+1) + min);
}
randomNumber(1, 6);


