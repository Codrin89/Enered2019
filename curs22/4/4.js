function truncate_string(value,nr){

	result = value.slice(0,nr);
	return result;
}
console.log(truncate_string('Robin Singh',7));
//string.substr(0,nr);