/*let x = '10';
let y = '2';
console.log(x + y);//not convert concat string
let z = x - y;//automatic convert string to number type
console.log(z);
console.log(typeof z);
console.log(x * y);
console.log(x / y);*/

/*//NaN type number
let m = "apple";
let n = 12;
let p = m * n;
console.log(p);
console.log(isNaN(p));
console.log(typeof NaN)
console.log(3 / 0); //return Infinity
*/
//convert decimal value to Binary,octal,hexadecimal use toString() method

/*let number = 65;
console.log(number.toString(8)); //octal
console.log(number.toString(16)); //hexadecimal
console.log(number.toString(2)); //binary
*/
//big integer number
let num = 9999999999999999n;
console.log( num);
let num2 = BigInt("1245222222356891547884");
console.log(typeof num2);

let num3 = Number.MAX_SAFE_INTEGER;
console.log(num3);
let num4 = Number.MIN_SAFE_INTEGER;
console.log(num4);
let num5 = Number.isInteger(14);
console.log(num5);

///////Number method//////////////
let numA = 1.3458;
let numB = numA.toString(5);
console.log(numB);

console.log(numA.toExponential(2));
console.log(numA.toFixed(2))
console.log(numA.toPrecision(2))
let numC = Number(numB);
console.log(typeof numC);
console.log(typeof numB);
console.log(parseInt(10.36));
console.log(parseFloat(10.3, 3.5));
console.log(parseInt("ahad"));
console.log(Number.isInteger(8.45));
console.log(Number.isSafeInteger(99999999999999));

/////number property////////////
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);


