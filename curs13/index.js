function is_string(param) {
	if (typeof param === 'string') {
		return true;
	}
	return false

}
console.log(is_string('w3resource'));
console.log(is_string(['1', '2', '5']));

console.log('exe 2');
function is_blank(param) {
	if (param.length === 0) {
		return true;
	}
	return false
}
console.log(is_blank(''));
console.log(is_blank('abc'));

console.log('Exe 3');
function  string_to_array(param) {
	return param.split('');
}
console.log(string_to_array("Robin Singh"));

console.log('Exe 4');
function truncate_string(param, number) {
	return param.substr(0, number);

}
console.log(truncate_string("Robin Singh", 4));

console.log('Exe 5');
function abrev_name(param) {
	var slicedName = param.split('');
	slicedName[1] = slicedName[1].substr(0, 1);
	return slicedName.join('');
}
console.log(abrev_name('Robin Singh'));

console.log('Exe 6');
function protect_mail(param) {
	var splitedText = param.split("@");
	splitedText[0] = splitedText[0].substr(0, Math.floor(splitedText[0].length/2)) + '...';
	return splitedText.join('@');
};
console.log(protect_mail("robin_singh@example.com"));

console.log('Exe 7');
function string_parameterize(param) {
	return param.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));

console.log('Exe 8');
function capitalize(param) {
	return param.charAt(0).toUpperCase() + param.slice(1);
}
console.log(capitalize('js string exercises'));

console.log('Exe 9');
function capitalize_Words(param) {
	return param.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('js string exercises'));

console.log('Exe 10');
function swapcase(param) {
	var arrayOfLetters = param.split("");
	for(let i = 0; i < arrayOfLetters.length; i++) {
		if(arrayOfLetters[i] === arrayOfLetters[i].toLowerCase()) {
			arrayOfLetters[i] = arrayOfLetters[i].toUpperCase();
		} else {
			arrayOfLetters[i] = arrayOfLetters[i].toLowerCase();
		}
	}
	return arrayOfLetters.join("");
}
console.log(swapcase('AaBbc'));

console.log('Exe 11');
function insert(param1, param2, number) {
	return param1.slice(0, number) + param2 + param1.slice(number);
}

console.log(insert('We are doing some exercises.','JavaScript ',18));

console.log('Exe 15');
function remove_first_occurrence(param, stringToSearch) {
	var index = param.indexOf(stringToSearch);
	if (index === -1) {
		return param;
	}
	return param.slice(0, index) + param.slice(index + stringToSearch.length);
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')); 