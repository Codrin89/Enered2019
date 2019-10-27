function removeString(string, remove){
	var index = string.indexOf(remove);
	if(index === -1)
		return string;
	// string = string.replace(remove,'');
	// return string;
	var output = string.slice(0, index) + string.slice(index + remove.length);
	return output;
}
console.log(removeString("The quick brown fox jumps over the lazy dog", 'the '));