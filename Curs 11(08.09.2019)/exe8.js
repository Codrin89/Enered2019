var people = prompt(" How many people? ");
var y =prompt(" How many pizzas do you have? ")


let slicesTotal = y * 8;
let slicesExtra = slicesTotal % people;
let slicesPerPerson = (slicesTotal - slicesExtra) / people;

var output1 = people + ' people with '+y+' pizzas';
var output2 = 'Each person gets '+slicesPerPerson+' pieces of pizza.'
var output3 = 'There are '+slicesExtra+' leftover pieces.'

console.log(output1);
console.log(output2);
console.log(output3);
