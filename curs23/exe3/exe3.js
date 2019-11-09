var emptyArray = [];
var loop = true;
while(loop){
	var name = prompt('Write your name:');
	if(name === ''){
		loop = false;
	}
	else {
		emptyArray.push(name);
	}
}