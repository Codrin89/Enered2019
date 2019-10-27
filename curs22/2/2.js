function is_Blank(x){
	if(x.length == 0 && typeof x === 'string')
	{
		return true;
	}
	return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));