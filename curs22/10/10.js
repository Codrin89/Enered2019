function insert(string1, string2, pos){
	// var output = [string1.slice(0,position)].join('');
	var output = string1.slice(0,pos) + string2 + " " + string1.slice(pos);
	return output;
}
console.log(insert('We are doing some exercises.','JavaScript', 18));