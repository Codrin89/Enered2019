const prof = ['FrontEnd', 'BackEnd', 'DevOps'];
for(i = 0; i < prof.length; i++){
	const container = document.getElementById('profession');
	container.innerHTML += '<option>'+prof[i]+'</option>';
}
document.getElementById('age').addEventListener('keyup', function(event){
	const initialValue = event.target.value;
	
	var validAge = validateAge(initialValue);
	// console.log(initialValue);
	if(validAge !== initialValue) {
		event.target.value = validAge;
	}

});
function validateAge(age) {
	const regEx = new RegExp('^\\d+$');//find it on the internet (regular expression for ...)!!!!

	// ^[a-zA-Z]+(-[a-zA-Z]+)*$ --> for letters
	// ^\\d+$ --> for numbers

	var z =	regEx.test(age);
	if(z == true){
		return age;
	}
	else {
		var sub = age.substr(0, age.length - 1);
		// console.log('new string: '+ x);
		return sub;
		
	}


}
document.getElementById('name').addEventListener('keyup',function(event){
	const initialValue= event.target.value;
	
	var validName = validateName(initialValue);
	// console.log(initialValue);
	
	if(validName !== initialValue){
		event.target.value = validName;
	}
});
function validateName(name){
	const regEx2 = new RegExp('^[a-zA-Z]+(-[a-zA-Z]+)*$');
	var y = regEx2.test(name);
	if(y == true){
		return name;
	}
	else{
		var sub = name.substr(0, name.length - 1);
		return sub;
	}
	
}
document.getElementById('experience').addEventListener('keyup',function(event){
	const initialValue = event.target.value;
	var validExp = validateExperience(initialValue);
	// console.log(initialValue);

		if(initialValue < 0){
		alert('Not a valid answer!');
}
		if(initialValue !== validExp )
		{
			event.target.value = validExp;
		}
	
});
function validateExperience(experience){
	const regEx2 = new RegExp('^\\d+$');
	var y = regEx2.test(experience);
	if(y == true && experience.length < 3){
		return experience;
	}
	else{
		var sub = experience.substr(0, experience.length - 1);
		return sub;
	}
	
}
document.getElementById('save-btn').addEventListener('click', function(){
	const saveData = {
		'name': document.getElementById('name').value,
		'age':  document.getElementById('age').value,
		'prof': document.getElementById('profession').value,
		'experience': document.getElementById('experience').value,
		'birthday':   document.getElementById('birthday').value
	};
	console.log(saveData);
});