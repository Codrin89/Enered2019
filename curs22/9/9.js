function swapcase(value){
	var arrayOfLetters = value.split(''); //a,A,b,B,C
	// return arrayOfLetters;
	for (var i = 0; i < arrayOfLetters.length; i++) {

		// if(arrayOfLetters[i]<='z' && arrayOfLetters[i]>='a')
		// 	arrayOfLetters[i]= arrayOfLetters[i].toUpperCase();
		// else 
		// 	if(arrayOfLetters[i]<='Z' && arrayOfLetters[i]>='A')
		// 	arrayOfLetters[i]= arrayOfLetters[i].toLowerCase();

		if(arrayOfLetters[i] === arrayOfLetters[i].toLowerCase()){
			arrayOfLetters[i] = arrayOfLetters[i].toUpperCase();
		}
		else
			{
				arrayOfLetters[i] = arrayOfLetters[i].toLowerCase();
			}

	}
	return arrayOfLetters.join("");
}
console.log(swapcase('aAbBC'));