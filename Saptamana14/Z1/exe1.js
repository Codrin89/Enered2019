/*Write a function to check whether an input is a string or not.
*/

console.log('Exe 1');
function is_string(param) {
	if( typeof param === 'string') {
		return true;
	}
	return false
}

console.log(is_string('w3resource'));
console.log(is_string(['1','2','5']));

/*Write a function to check whether a string is blank or not. console.log(is_Blank('')); console.log(is_Blank('abc')); true false
*/
console.log('Exe 2');
function is_blank(param) {
	if(param.length === 0) {
		return true;
	}

		return false;
}

console.log(is_blank(''));
console.log(is_blank('abc'));

/*Write a function to split a string and convert it into an array of words. console.log(string_to_array("Robin Singh")); ["Robin", "Singh"]
*/
console.log('Exe3');
function string_to_array(param) {
	return param.split('')
}

/*Write a function to extract a specified number of characters from a string. console.log(truncate_string("Robin Singh",4)); "Robi"
*/
console.log('Exe 4');

truncate_string = function (str1, length) {
  
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));

/*Write a JavaScript function to convert a string in abbreviated form. he editor console.log(abbrev_name("Robin Singh")); "Robin S.*/
console.log('Exe5');

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));

/*Write a JavaScript function to hide email addresses to protect from unauthorized user console.log(protect_email("robin_singh@example.com")); "robin...@example.com"*/
console.log('Exe 6');
function protect_email(param) {
	//split email by NAME and ADRRESS (robin_singh && example.com)
	var splitedText = param.split('@');
	// extract sub string of NAME from half the length of the NAME
	splitedText[0] = splitedText[0].substr(0, Math.floor(splitedText[0]. length / 2)) + '...';
	return splitedText.join('@');
}

console.log(protect_email('robin_singh@example.com'));

/*Write a JavaScript function to parameterize a string. console.log(string_parameterize("Robin Singh from USA.")); "robin-singh-from-usa"*/
console.log('Exe 7');

string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));

/*Write a JavaScript function to capitalize the first letter of a string. console.log(capitalize('js string exercises')); "Js string exercises"*/
console.log('Exe 8');

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
console.log(capitalize('capitalize_Words'));



/*Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. console.log(swapcase('AaBbc')); "aAbBC"*/
console.log('Exe 10');
function swapcase(param) {
	var arrayOfLetters = param.split ("");
	for(let i = 0; i < arrayOfLetters.length; i++) {
		if(arrayOfLetters[i] === arrayOfLetters[i].toLowerCase()) {
			//litera mica
			arrayOfLetters[i] = arrayOfLetters[i].toUpperCase();
		} else {
			arrayOfLetters[i] = arrayOfLetters[i].toLowerCase();
			
		}
		}
	
	return arrayOfLetters.join("");
}
console.log(swapcase('aAbBC'));

/*Write a JavaScript function to insert a string within a string at a particular position console.log(insert('We are doing some exercises.','JavaScript ',18)); "We are doing some JavaScript exercises.*/
console.log('Exe 12');

insert = function insert(main_string, ins_string, pos) {
   if(typeof(pos) == "undefined") {
    pos = 0;
  }
   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
    }
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));


/*Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')); Output : "The quick brown fox jumps over lazy dog"*/
console.log('Exe 15');

function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
