function abbrev_name(value){
	var slicedName = value.split(' ');
	slicedName[1] = slicedName[1].slice(0,1); //Singh --> S
	return slicedName.join(' ');
}
console.log(abbrev_name('Robin Singh'));