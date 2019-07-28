// function first (p1, p2, p3) {
      
// }
// first(p11, p12, p13);
function add (numberone, numbertwo) {
	console.log(numberone + numbertwo);
}
var nr1 = 10;
var nr2 = 20;
var nr3 = 50;
add(nr1,nr2);
add(nr1, nr3);

function addNumberWithReturn (numberone, numbertwo) {
	return numberone + numbertwo;
}
var z = addNumberWithReturn(nr2, nr3);
console.log(z);
 function averageNumbers (a,b,c){

 	var sum =( a + b + c )/3; 
 	return sum;
 }
var y = averageNumbers(1,2,3);
console.log (y);
 function averageNumbersForLoop(arrayNumbers) {
 	var sum = 0;
 	for (var i = 0; i < arrayNumbers.length; i++) {
 		
 	    sum = sum + arrayNumbers[i];
 		
 	}
 	var a = sum/arrayNumbers.length;
 	return a;
 }
 var array = [10, 15, 25, 40 ,33, 72];
 var w = averageNumbersForLoop(array);
 console.log(w);

 function checkAge (age) {
 	if (age > 18) {
 	// console.log('age is bigger than 18');}
 		return true;
    }
 	else {
 		// console.log('age is smaller than 18');
 		return false;
 	}
 }
 var m = checkAge(20);
 console.log(m);