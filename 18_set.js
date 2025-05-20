const setOfNumber = new Set([10, 12, 18, 20]);
console.log(setOfNumber);
setOfNumber.add(15);
console.log(setOfNumber);

const check = setOfNumber.has(15);
console.log(check);
console.log(setOfNumber.values());
console.log(setOfNumber.entries());
