//exe1
console.log('exe1');
function is_string(param) {
if( typeof param === 'string' ) {
	return true
}
return false
}
console.log(is_string('w3resource'));
console.log(is_string(['1', '2', '5']));

console.log('exe2');
function is_blank(param) {
	if( param.length === 0 ) {
	return true
}
return false
}
console.log(is_blank(''));
console.log(is_blank('abc'));

console.log('exe3');
function string_to_array(param) {
	return param.split(' ');
}
console.log(string_to_array("Robin Singh"));

console.log('exe4');
//STRING.substr(charStart, charEnd);
//STRING.slices(charStart, charEnd);putem folosi una din astea2
function truncate_string(param1,param2) {
	return param1.substr(0, param2)
}
 console.log(truncate_string("Robin Singh",7));
 console.log(truncate_string("Robin Singh",4));
 console.log(truncate_string("Robin Singh",10));

 console.log('exe5');
 function abbrev_name(param) {
 	var slicedName = param.split('');
 	slicedName[1] = slicedName[1].substr(0, 1);
     return slicedName.join(' ');
 }
 console.log(abbrev_name('Robin Singh'));

 console.log('exe6');
 function protect_email(param) {
 	//split email by NAME and ADRESS (robin_singh && example.com)
 	var splitedText = param.split('@');
 	//extract sub string of NAME from half the length of the NAME
 	splitedText[0] = splitedText[0].substr(0, Math.floor(splitedText[0].
 		length / 2)) + '...';
 	return splitedText.join('@');
 }
 console.log(protect_email("robin_singh@example.com"));

 console.log('exe7')
 function string_parameterize(param) {
 	//param remove special character
 	param = param.replace(/[^a-zA-Z ]/g, "");
 	//param to lowercase
    param = param.toLowerCase();
 	//param replace " " with "-"
 	param = param.split(' ').join('-');
 	return param;
 }
 console.log(string_parameterize("Robin Singh from USA."));

 console.log('exe8');
 function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize('js string exercises'));
 
 console.log('exe10');
 function swapcase(param) {
    var arrayOfLetters = param.split("");
    for(let i = 0; i < arrayOfLetters.length; i++) {
    	if(arrayOfLetters[i] === arrayOfLetters[i].toLowerCase()) {
    		//litera mica
    		arrayOfLetters[i] = arrayOfLetters[i].toUpperCase();
    	} else {
    		//litera mare
    		arrayOfLetters[i] = arrayOfLetters[i].toLowerCase();
    	}
    }
    return arrayOfLetters.join("")
 }
 console.log(swapcase('aAbBcCdD'));

  console.log('exe12');
  function insert(param1,param2,nr) {
       return param1.slice(0,nr) + param2 + param1.slice(nr);
  }
  console.log(insert('We are doing some exercises.','JavaScript ',18));

  console.log('exe15');
function remove_first_occurrence(param, stringToSearch) {
	var index = param.indexOf(stringToSearch);
	if(index === -1) {
		return param;
	}
	return param.slice(0, index) + param.slice(index + stringToSearch
		.length);

}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));