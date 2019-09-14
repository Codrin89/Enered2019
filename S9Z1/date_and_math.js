//DATE

let date = new Date();
console.log(date);
const fullYear = date.getFullYear();
console.log('fullYear: ', fullYear);
date.setFullYear(2020);
console.log(date);
const fullYearChanged = date.getFullYear();
console.log('fullYearChanged: ', fullYearChanged);

let getMonth = date.getMonth();
console.log('getMonth: ', getMonth);

let getTime = date.getTime();
console.log(getTime);

// let newDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);

let newDate = new Date(2001, 8, 11, 13);
console.log('newDate: ', newDate);
let dateFromTimestamp = new Date(getTime-(24*60*60*1000));
console.log(dateFromTimestamp);


//MATH

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

console.log(Math.pow(10,2));
console.log(Math.sqrt(9));

console.log(Math.abs(-10));
console.log(Math.max(13, 5, 23));
console.log(Math.min(13, 5, 23));

console.log(Math.random());