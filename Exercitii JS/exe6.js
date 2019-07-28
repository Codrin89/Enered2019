var age = prompt('What is your age?');
var retireAge = prompt('What age do you want to retire at?')

var currentYear = 2019;

var difference = retireAge - age;
var retireYear = currentYear + difference;

console.log('You have ' +difference+ ' years left until you can retire');
console.log("It's " +currentYear+ ", so you can retire in " +retireYear+ ".");