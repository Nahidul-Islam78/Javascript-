let time = new Date(2005,9,18);
console.log(time.toDateString());
console.log(time.toUTCString());
console.log(time.toISOString());
console.log(Date.parse(2025, 4, 6));
console.log(time.getFullYear());
console.log(time.setFullYear(2024));

let date = new Date(5, 27, 2025);
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']
console.log(days[date.getDay()]);

