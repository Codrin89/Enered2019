let orderAmount = prompt(" What is the order amount? ");
let state =prompt(" What is the state? ")


console.log(" What is the state? " + state );
console.log(" The subtotal is" + orderAmount + "$" )
if(state === "WI") {
	let tax = (orderAmount * (5.5/100))
	console.log(" The tax is " + tax);
	console.log(" The total is" + (parseInt(orderAmount) + tax));
} else { 
	console.log(" The total is" + orderAmount);
}	
