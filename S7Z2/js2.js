// function name(parameter1, parameter2, parameter3) {

// }
// name(parameter1, parameter2, parameter3);

function AddNumbers(parameter1, parameter2)  {
	console.log(parameter1 + parameter2);
}
var nr1 = 10;
var nr2 = 20;
var nr3 = 50;

AddNumbers(nr1, nr2);

function addNumbersWithReturn(numberone, numbertwo) {
	return numberone + numbertwo;
}
var z = addNumbersWithReturn(nr2, nr3);
console.log (z);

function MedieAritmetica ( a1, a2, a3 ) {
	return (a1+a2+a3)/3;
}
var w = MedieAritmetica(10, 17, 43);
console.log(w);

function MediaArtimeticaDinamica(arrayNumbers) {
	var suma = 0;
	for (var i = 0; i < arrayNumbers.length; i++) {
		suma += arrayNumbers[i];
	}
	return	suma/arrayNumbers.length;
}
var array = [10, 15, 25, 45, 40, 33, 72, 100, 43, 56];
var y = MediaArtimeticaDinamica(array);
console.log(y);

function CheckAge(age) {
	if (age>=18)
		console.log('Above18');
	else
		console.log('Under18');
}
CheckAge(13);
CheckAge(60);