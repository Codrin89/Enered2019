function decimalToNumeral (number) {
	let newNumber='';
	while(number!=0) {
		if (number/1000>=1) {
			newNumber = newNumber + 'M';
			number = number-1000;
			console.log(number);
		} else if (number/900>=1) {
			newNumber = newNumber+'CM';
			number = number-900;
			console.log(number);
		} else if (number/500>=1) {
			newNumber = newNumber+'D';
			number = number-500;
			console.log(number);
		} else if (number/400>=1) {
			newNumber = newNumber+'CD';
			number = number-400;
			console.log(number);
		} else if (number/100>=1) {
			newNumber = newNumber+'C';
			number = number-100;
			console.log(number);
		} else if (number/90>=1) {
			newNumber = newNumber+'XC';
			number = number-90;
			console.log(number);
		} else if (number/50>=1) {
			newNumber = newNumber+'L';
			number = number-50;
			console.log(number);
		} else if (number/40>=1) {
			newNumber = newNumber+'XV';
			number = number-40;
			console.log(number);
		} else if (number/10>=1) {
			newNumber = newNumber + 'X';
			number = number-10;
			console.log(number);
		} else if (number/9>=1) {
			newNumber = newNumber+'IX';
			number = number-9;
			console.log(number);
		} else if (number/5>=1) {
			newNumber = newNumber + 'V';
			number = number-5;
			console.log(number);
		} else if (number/4>=1) {
			newNumber = newNumber+'IV';
			number = number-4;
			console.log(number);
		} else if (number/1>=1) {
			newNumber = newNumber + 'I';
			number = number-1;
			console.log(number);
		}
	}
	return newNumber;
}
console.log(decimalToNumeral(2479));