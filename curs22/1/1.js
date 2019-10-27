function is_string(x){
	if(typeof x === 'string')
		{
			return true;
		}
	else return false;
}
console.log(is_string('w3resource'));
console.log(is_string(['1','2','5']));
