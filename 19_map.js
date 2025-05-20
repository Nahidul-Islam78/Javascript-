const students = new Map([
  ["names", "karim"],
  ['roll', 10],
  ['gpa',3.50]
]
)
console.log(students);
students.set("subject", "cse");
students.set(4, 'boy');
const studentsRoll = students.get('roll');
console.log(studentsRoll);
console.log(students.size);
console.log(students.delete(4));
console.log(students);

for (x of students.values()) {
  console.log(x);
}


// Create an Array
const fruits = [
  { name: 'apples', quantity: 300, price: 1501 },
  { name: 'bananas', quantity: 500, price: 1501 },
  { name: 'oranges', quantity: 200, price: 1400 },
  { name: 'kiwi', quantity: 150, price: 1501 }
];

// Callback function to Group Elements
function myCallback({ price }) {
  return price > 1500 ? "ok" : "low";
}

// Group by price
const result = Map.groupBy(fruits, myCallback);
console.log(result);


