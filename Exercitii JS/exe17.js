// let yourWeight = prompt('Enter your weight: ');
// let yourGender = prompt('Enter your gender: ');
// let alcoholAmount = prompt('Enter the amount of alcohol: ');
// let timeSinceLastDrink = prompt('Enter time since last drink: ');

// function calculateBAC(weight, gender, amount, time) {
// 	if (gender === 'f') {
// 		var BAC = (amount*5.14/weight*0.66)-.015*time;

// 	} else if (gender === 'm') {
// 		var BAC = (amount*5.14/weight*0.73)-.015*time;
// 	}
// 	return BAC;
// }

// function tellMe() {
// 	var BAC = calculateBAC(yourWeight, yourGender, alcoholAmount, timeSinceLastDrink);
// 	BAC = BAC.toFixed(2);
// 	if (BAC<0.08) {
// 		document.getElementById('BACValue').innerHTML = 'Your BAC is ' +BAC+ '.<br>It is legal for you to drive.';	
// 	} else {
// 		document.getElementById('BACValue').innerHTML = 'Your BAC is ' +BAC+ '.<br>It is not legal for you to drive.';
// 	}
// }
// tellMe();

// Write a javascript function that will receive 2 parameters and will return/output the result of their sum, validation included.
// var Sum = 0;

// function Suma(param1, param2) {
// 	if((parseInt(param1)===param1)&&(parseInt(param2)===param2)) {
// 	Sum = param1 + param2;
// 	} else {
// 	Sum = "not numbers"; }
// 	return Sum;
// }
// console.log(Suma(2, "5"));
// Write a javascript function that will receive a parameter as a number "n" and return the sum of "1^1 + 2^2 + .... + n^n".

// function SumPower(n) {
// 	var Power =0;
// 	for (let i=1; i<=n; i++) {
// 		Power+= Math.pow(i,i);
// 	}
// 	return Power;
// }
// console.log(SumPower(1));
// console.log(SumPower(2));
// console.log(SumPower(3));

// BONUS!!! Write a javascript function that will receive an array of numbers (e.g [1, 4, 2, 9, 0, 3, 8, 6, 4, 5, 1, 3, 3, 7]) as a parameter and it will return the array sorted ascending.

// function SortArray(param) {
// 	SortedArray=param.sort();
// 	return SortedArray;
// }
// console.log(SortArray([1, 4, 2, 9, 0, 3, 8, 6, 4, 5, 1, 3, 3, 7]));

// BONUS!!! Write a javascript function that will receive an string as a parameter and return a boolean which is true if the string is a palindrome.

// function Palindrome(param) {
// 	if (param == (param.split("").reverse().join(""))) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// }
// console.log(Palindrome("abcba"));
// console.log(Palindrome("abca"));