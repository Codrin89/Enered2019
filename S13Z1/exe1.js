// Write a function to check whether an input is a string or not. console.log(is_string('w3resource')); true console.log(is_string([1, 2, 4, 0])); false
console.log('Exe1');
function CheckType(data) {
	if (typeof data === typeof 'abc') {
		return true;
	} 
		return false
}

console.log(CheckType(['1']));
console.log(CheckType('abc'));


// Write a function to check whether a string is blank or not. console.log(is_Blank('')); console.log(is_Blank('abc')); true false
console.log('Exe2');
function StringBlank(param) {
	if (param.length == 0) {
		return true;
	}
		return false
}
console.log(StringBlank(''));
console.log(StringBlank('aBV'));

// Write a function to split a string and convert it into an array of words. console.log(string_to_array("Robin Singh")); ["Robin", "Singh"]
console.log('Exe3');
function string_to_array(param) {
	return param.split(' ');
}
console.log(string_to_array("Robin Singh"));

// Write a function to extract a specified number of characters from a string. console.log(truncate_string("Robin Singh",4)); "Robi"
//substr sau slice
console.log('Exe4');
function truncate_string(mylength, mystring) {
	return mystring.substring(0, Math.min(mystring.length, mylength));
}
console.log(truncate_string(2, 'abcdefg'));

// Write a JavaScript function to convert a string in abbreviated form. he editor console.log(abbrev_name("Robin Singh")); "Robin S.
console.log('Exe5');
function abbrev_name(param) {
	var slicedName = param.split(' ');
	slicedName[1] = slicedName[1].substr(0,1);
	return slicedName.join(' ');
}
console.log(abbrev_name('Robin Singh'));

// Write a JavaScript function to hide email addresses to protect from unauthorized user console.log(protect_email("robin_singh@example.com")); "robin...@example.com"
console.log('Exe6');
function protect_email(param) {
	var splittedText = param.split('@');
	splittedText[0] = splittedText[0].substr(0, Math.floor(splittedText[0].length/2)) + '...';
	return splittedText.join('@');
}
console.log(protect_email('robin_singh@gmail.com'));


// Write a JavaScript function to parameterize a string. console.log(string_parameterize("Robin Singh from USA.")); "robin-singh-from-usa"
console.log('Exe7');
function string_parametrize(param) {
	param = param.replace(/[^a-zA-Z ]/g, "");
	param = param.toLowerCase();
	param = param.split(" ");
	param = param.join("-");
	return param;
}
console.log(string_parametrize("Robin Singh from USA."));



// Write a JavaScript function to capitalize the first letter of a string. console.log(capitalize('js string exercises')); "Js string exercises"
console.log('Exe8');
function capitalize(param) {
	param = param.charAt(0).toUpperCase() + param.slice(1);
	return param;
}
console.log(capitalize('js string exercises'));



// Write a JavaScript function to capitalize the first letter of each word in a string. console.log(capitalize_Words('js string exercises')); "Js String Exercises"
console.log('Exe9');
function capitalizewords(param) {
	param = param.split(" ");
	for (var i=0; i<param.length; i++) {
	param[i] = param[i].charAt(0).toUpperCase() + param[i].slice(1);
	}
	param = param.join(" ");
	return param;
}
console.log(capitalizewords('js string exercises'));

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. console.log(swapcase('AaBbc')); "aAbBC"
console.log('Exe10');
function swapCases (param) {
	param = param.split("");
	for (let i=0; i<param.length; i++) {
		if (param[i] === param[i].toLowerCase()) {
			param[i] = param[i].toUpperCase();
		} else {
			param[i] = param[i].toLowerCase();
		}
	}
	param = param.join("");
	return param;
}
console.log(swapCases("Abc"));

// Write a JavaScript function to concatenates a given string n times console.log(repeat('Ha!',2)); console.log(repeat('Ha!',3)); "Ha!Ha!" "Ha!Ha!Ha!"
console.log('Exe11');
function repeat(param, n) {
	return param.repeat(n);
}
console.log(repeat("Ha!", 5));

// Write a JavaScript function to insert a string within a string at a particular position console.log(insert('We are doing some exercises.','JavaScript ',18)); "We are doing some JavaScript exercises.
console.log('Exe12');
function insertString (param1, param2, param3) {
	return param1.slice(0, param3) + param2 + param1.slice(param3);
}
console.log(insertString('We are doing some exercises.','JavaScript ',18));

// Write a JavaScript function to chop a string into chunks of a given length. console.log(string_chop('w3resource',2)); console.log(string_chop('w3resource',3)); ["w3", "re", "so", "ur", "ce"] ["w3r", "eso", "urc", "e"]
console.log('Exe13');
function string_chop (param, n) {
	return param.match(new RegExp('.{1,' + n + '}', 'g'));
}
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));

// Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. console.log(humanize_format()); console.log(humanize_format(1)); console.log(humanize_format(8)); console.log(humanize_format(301)); console.log(humanize_format(402)); "1st" "8th" "301st" "402nd"
console.log('Exe14');
function humanize_format(param) {
	if (typeof(param) === 'number') {
		if (param%10 === 1) 
			param = param + 'st';
		else if (param%10 === 2) 
			param = param + 'nd';
		else if (param%10 === 3) 
			param = param + 'rd';
		else param = param + 'th';

		return param;} else { 
		return "not a number";}
}
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(403));
console.log(humanize_format('abecedar'));

// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')); Output : "The quick brown fox jumps over lazy dog"
console.log('Exe15');
function remove_first_occurrence(param1, param2) {
	var index = param1.indexOf(param2)
	if (index === -1) {
		return param1;
	} else {
		return param1.slice(0, index) + param1.slice(index + param2.length);
	}
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));