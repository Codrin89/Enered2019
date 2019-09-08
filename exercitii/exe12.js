var a = prompt('What is the order amount?');
var b = prompt(' What is the state');

console.log('What is the state?' + b);
console.log('The subtotal is ' + a);
if(b == 'WI') {
	let tax = (a * (5.5/100))
	console.log('The tax is ' + (parseInt(a) + tax));
} else {
	console.log('The total is' + a);
}