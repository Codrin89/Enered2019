// function name(parameter1, parameter2, parameter3) {

// }
// name(p11, p12, p13);
function addNumbers(numberone, numbertwo) {
	console.log(numberone + numbertwo);
}

var nr1 = 10;
var nr2 = 20;
var nr3 = 50;
addNumbers(nr1, nr2);
addNumbers(nr1, nr3);

function addNumbersWithReturn(numberone, numbertwo) {
	return numberone + numbertwo;
}
 var z = addNumbersWithReturn(nr2, nr3);
 console.log(z)

 function MedAritmetica(nr1, nr2, nr3) {
 	return (nr1 + nr2 + nr3)/3;
 }
 var w = MedAritmetica(10, 17, 43);
 console.log(w);

 function MedAritmeticaDinamica(arrayNumbers) {
 	var sum = 0
 	for(var i = 0; i < arrayNumbers.length; i++) {
        sum += arrayNumbers[i];
 	}
 	return (sum/arrayNumbers.length);
 }
 var array = [10, 15, 25, 40, 33, 72];
 MedAritmeticaDinamica(array);
 var y = MedAritmeticaDinamica(array);
 console.log(y);

function checkAge(age) {
	if(age > 18) {
		console.log('age is bigger than 18');
	} else {
		console.log('age is smaller than 18');
	}
}

checkAge(20);
checkAge(13);