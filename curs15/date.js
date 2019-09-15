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

//let newDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
let newDate = new Date(2001, 8, 11, 13, 20, 22, 10);
console.log(newDate);

let dateFromTimestamp = new Date(getTime - (1000 * 60 * 60 * 24));
console.log(dateFromTimestamp);


//MATH

//Rotunjire de la .5 in sus sau in jos
let number1 = 10.23123;
let number2 = 5.525325;
let number3 = 12.5;
console.log(Math.round(number1));
console.log(Math.round(number2));
console.log(Math.round(number3));

//Rotunjeste in jos
console.log(Math.floor(number1));
console.log(Math.floor(number2));
console.log(Math.floor(number3));

//Rotunjeste in sus
console.log(Math.ceil(number1));
console.log(Math.ceil(number2));
console.log(Math.ceil(number3));

//Ridica la putere

console.log(Math.pow(10, 2));

//Radical
console.log(Math.sqrt(9));

//Valoare absoluta
console.log(Math.abs(-10));
console.log(Math.max(15, 22, 33, 54));
console.log(Math.min(15, 22, 33, 54));

//Prababilitate de la 0 la 1 orice valoare
console.log(Math.random());