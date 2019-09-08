// What is the first number? 10
// What is the second number? 5
// 10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
// 10 / 5 = 2

let x = parseInt (prompt('What is the first number?'));
let y = parseInt (prompt('What is the second number?'));
console.log(x+ '+' +y+ '=' +(x+y));
console.log(x+ '-' +y+ '=' +(x-y));
console.log(x+ '*' +y+ '=' +(x*y));
console.log(x+ '/' +y+ '=' +(Math.round(x/y)));

