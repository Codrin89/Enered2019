//var a = prompt('How many people?');
//var b = prompt('How many pizzas do you have?');
//var output1 = +a+ ' people with ' +b+ ' pizzas ';

//var output2 = 'Each person gets ' +b+ ' pieces of pizza. '+' There are 0 leftover pieces.'
//;
//console.log(output1);
//console.log(output2);//
var people = prompt('How many people?');
var pizza = prompt('How many pizzas do you have?');
var slices = 8;

var leftovers = (pizza * slices) % people;
var slicesPerPerson = ((pizza * slices)- leftovers )/ people;

console.log(slicesPerPerson);
console.log(leftovers);
