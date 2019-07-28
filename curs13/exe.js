var age = prompt('What is your age?');
var retireAge = prompt('What age you want to retire?')
var currentYear = 2019;

var differenceAge = retireAge - age;
var retireYear = currentYear + differenceAge;
console.log ('You have ' + differenceAge + ' years left until you can retire .');
console.log ("It's " + currentYear + ", so you can retire in " + retireYear + ".")

