var x = prompt('how many people?');
var y = prompt('hoe many pizzas do you have?');



let slicesTotal = y * 8
let slicesExtra = slicesTotal % x;
let slicesPerPerson = (slicesTotal - slicesExtra) / x;
console.log(slicesTotal);
console.log(slicesExtra);
console.log(slicesPerPerson);


var output = +x+ ' people with ' +y+ ' pizzas'
console.log(output);
var output = 'each person gets '  +slicesPerPerson+  ' pieces of pizza'
console.log(output);
var output = 'there are ' +slicesExtra+ ' leftover pieces'
console.log(output);
