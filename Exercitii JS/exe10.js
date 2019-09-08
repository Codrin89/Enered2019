// Enter the price of item 1: 25
// Enter the quantity of item 1: 2
// Enter the price of item 2: 10
// Enter the quantity of item 2: 1
// Enter the price of item 3: 4
// Enter the quantity of item 3: 1
// Subtotal: $64.00
// Tax: $3.52
// Total: $67.52

let a1 = prompt('Enter the price of item 1: ');
let a2 = prompt('Enter the quantity of item 1: ');
let b1 = prompt('Enter the price of item 2: ');
let b2 = prompt('Enter the quantity of item 2: ');
let c1 = prompt('Enter the price of item 3: ');
let c2 = prompt('Enter the quantity of item 3: ');

console.log('Subtotal: $' +(a1*a2+b1*b2+c1*c2) );
console.log('Tax: $' +((a1*a2+b1*b2+c1*c2)*0.055));
console.log('Total: $' +((a1*a2+b1*b2+c1*c2)*1.055));