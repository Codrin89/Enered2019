var people = prompt('How many people');
var pizzas = prompt('How many pizza do you have');
var slices = 8;

console.log( +people+ ' people with ' +pizzas+ ' pizzas');

var SlicesPerPerson = Math.floor((pizzas*slices)/people);
var LeftoverSlices = (pizzas*slices)%people;
console.log('Each person gets ' +SlicesPerPerson+ ' slices of pizza');
console.log(LeftoverSlices);