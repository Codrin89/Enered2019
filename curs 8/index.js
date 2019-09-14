let date = new Date();
console.log(date);
const fullYear = date.getFullYear();
console.log('fullYear:',fullYear);
date.setFullYear(2020);
console.log(date);
const fullYearChanged = date.getFullYear();
console.log('fullYearChanged:',fullYearChanged);

let getMonth = date.getMonth();
console.log('getMonth:', getMonth);

let getTime = date.getTime();
console.log(getTime);

// let newDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
let newDate = new Date(2001, 8, 11, 13, 20, 22, 10);
console.log(newDate);

let dateFromTimestamp = new Date(getTime - (1000 * 60 * 60 * 24));
console.log(dateFromTimestamp);

let number1 = 10.23213;
let number2 = 5.732332;
let number3 = 12.5;
console.log(Math.round(number1));
console.log(Math.round(number2));
console.log(Math.round(number3));

console.log(Math.floor(number1));
console.log(Math.floor(number2));
console.log(Math.floor(number3));

console.log(Math.ceil(number1));
console.log(Math.ceil(number2));
console.log(Math.ceil(number3));

console.log(Math.pow(10, 2));
console.log(Math.sqrt(9));

console.log(Math.abs(-10));
console.log(Math.max(10, 29, 44, 12, 2, 90, 72));
console.log(Math.min(10, 29, 44, 12, 2, 90, 72));

console.log(Math.random());