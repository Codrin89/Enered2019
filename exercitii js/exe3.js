var age = prompt('What is ypur age?');
var retireAge = prompt('What age you want  to retire at?');

var currentYear = 2019;

var diferenceAge = retireAge - age;
var retireYear = currentYear + diferenceAge;

 console.log('What is you age?' + age);
 console.log('What age you want to retire at?' + retireAge);
 console.log('You have' + diferenceAge + 'years left until you can retire.');
 console.log("It's" + currentYear + ", so you can retire in" + retireYear + ".");