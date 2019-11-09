// exe 1
console.log('Exe 1');
function is_string(param) {
	if( typeof param === 'string' ) {
		return true;
	}
	return false;
}
console.log(is_string('w3resource'));
console.log(is_string(['1', '2', '5']));

console.log('Exe 2');
function is_blank(param) {
	if( param.length === 0 ) {
		return true;
	}
	return false
}
console.log(is_blank(''));
console.log(is_blank('abc'));

console.log('Exe 3');
function string_to_array(param) {
	return param.split(' ');
}
console.log(string_to_array("Robin Singh"));

console.log('Exe 4');
// STRING.substr(charStart, charEnd);
// STRING.slice(charStart, charEnd);
function truncate_string(param, numberOfChars) {
	return param.substr(0, numberOfChars);
}
console.log(truncate_string('Robin Singh', 7));
console.log(truncate_string('Robin Singh', 4));
console.log(truncate_string('Robin Singh', 10));

console.log('Exe 5');
function abbrev_name(param) {
	var slicedName = param.split(' ');
	slicedName[1] = slicedName[1].substr(0, 1);
	return slicedName.join(' ');
}
console.log(abbrev_name('Robin Singh'));

console.log('Exe 6');
function protect_email(param) {
	//split email by NAME and ADDRESS (robin_singh && example.com) 
	var splitedText = param.split('@');
	// extract sub string of NAME from half the length of the NAME
	splitedText[0] = splitedText[0].substr(0, Math.floor(splitedText[0].length / 2)) + '...';
	return splitedText.join('@');
}
console.log(protect_email('robin_singh@example.com'));

console.log('Exe 7');
function string_parameterize(param) {
	// param remove special characters

	// param to lower case

	// param replace " " with "-"

}

console.log('Exe 10');
function swapcase(param) {
	var arrayOfLetters = param.split("");
	for(let i = 0; i < arrayOfLetters.length; i++) {
		if(arrayOfLetters[i] === arrayOfLetters[i].toLowerCase()) {
			// litera mica
			arrayOfLetters[i] = arrayOfLetters[i].toUpperCase();
		} else {
			// litera mare
			arrayOfLetters[i] = arrayOfLetters[i].toLowerCase();
		}
	}
	return arrayOfLetters.join("");
}
console.log(swapcase('aAbBcCdD'));

console.log('Exe 15');
function remove_first_occurrence(param, stringToSearch) {
	var index = param.indexOf(stringToSearch);
	if(index === -1) {
		return param;
	}
	return param.slice(0, index) + param.slice(index + stringToSearch.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));









