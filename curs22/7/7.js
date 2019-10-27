function string_parameterize(value){
	value = value.replace(/[^a-zA-Z ]/g, "");
	value = value.toLowerCase();
	value = value.split(' ').join('-');
	return value;
}
console.log(string_parameterize('Shj.AhSd_as shd/ ASB?'));