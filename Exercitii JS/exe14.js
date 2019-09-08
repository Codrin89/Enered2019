// What is the order amount? 10
// What is the state? WI
// The subtotal is $10.00.
// The tax is $0.55.
// The total is $10.55.
// Or
// What is the order amount? 10
// What is the state? MN
// The total is $10.00

let orderAmount = parseInt(prompt('What is the order amount? '));
let state = prompt('What is the state? ');
console.log(state);
if (state === 'WI') {
	console.log('The subtotal is $' +orderAmount.toFixed(2)+ '.');
	console.log('The tax is $' +(orderAmount.toFixed(2)*0.055)+ '.');
	console.log('The Total is $' +((orderAmount*1.055).toFixed(2))+ '.');
} else {
	console.log('The subtotal is $' +orderAmount.toFixed(2)+ '.');
}