var people = prompt ('How many people?');
var pizza = prompt ('How many pizza do you have?');
var slices = 8;
var slicesPerPerson = (pizza * slices)/people;
var leftovers = (pizza * slices ) % people;
console.log(Math.floor(slicesPerPerson));
console.log(leftovers);