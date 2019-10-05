const prof = ['frontEnd', 'Backend', 'DevOps'];

for (var i = 0; i < prof.length; i++) {
	const selectElement = document.getElementById('professionValid');
	selectElement.innerHTML += '<option>' + prof[i] + '</option>';
}

function validateAge(value) {
	const regExp = new RegExp("^\\d+$");
	var regResult = regExp.test(value);
	console.log(regResult);

	if (regResult && value.length<3) {
		return value;
	} else {
		return value.substr(0, value.length-1);
	}
}
document.getElementById('age').addEventListener('keyup', function(event){
	const value = event.target.value;
	var result = validateAge(value);

	if (result!==value){
		event.target.value = result;
	}
});

function validateName(value) {
	const regExp = new RegExp("^[a-zA-Z]+$");
	var regResult = regExp.test(value);
	console.log(regResult);

	if (regResult) {
		return value;
	} else {
		return value.substr(0, value.length-1);
	}
}
document.getElementById('name').addEventListener('keyup', function(event){
	const value = event.target.value;
	var result = validateName(value);

	if (result!==value){
		event.target.value = result;
	}
});


function validateExperience(value) {
	const regExp = new RegExp("^\\d+$");
	var regResult = regExp.test(value);
	console.log(regResult);

	if (regResult && value.length < 3) {
		return value;
	} else {
		return value.substr(0, value.length-1);
	}
}
document.getElementById('experience').addEventListener('keyup', function(event){
	const value = event.target.value;
	var result = validateExperience(value);
	if (result!==value){
		event.target.value = result;
	}
});

document.getElementById('submit').addEventListener('click', function(){
	event.preventDefault();
	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;
	var experience = document.getElementById('experience').value;
	var birthday = document.getElementById('birthday').value;
	console.log('Name:'+name+ '; Age:' +age+'; experience:' +experience+ '; birthday: ' +birthday);
});