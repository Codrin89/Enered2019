const prof=['FrontEnd', 'BackEnd', 'DevOps'];
for (let i=0; i<prof.length; i++) {
	const selectElem = document.getElementById('proffession-valid');
	selectElem.innerHTML += '<option>'+prof[i]+'</option>';
}

//validate age
function validateAge(value) {
	const regExp = new RegExp("^\\d+$");
	const regResult = regExp.test(value);
	if (regResult) {
		return value;
	} else {
		return value.substr(0, value.length-1);
	}
}
document.getElementById('age-valid').addEventListener('keyup', function(event) {
	const value = event.target.value;
	const resultValidate = validateAge(value);
	if (resultValidate !== value) {
		event.target.value = resultValidate;
	}
});

//validate name
function validateName(value) {
	const regExp = new RegExp("^[a-zA-Z]+$");
	const regResult = regExp.test(value);
	if (regResult) {
		return value;
	} else {
		return value.substr(0, value.length-1);
	}
}
document.getElementById('name-valid').addEventListener('keyup', function(event) {
	const value = event.target.value;
	const resultValidate = validateName(value);
	if (resultValidate !== value) {
		event.target.value = resultValidate;
	}
});

//validate years of experience
function validateExperience(value) {
	const regExp = new RegExp("^\\d+$");
	const regResult = regExp.test(value);
	if (regResult && (value.length <=2)) {
		return value;
	} else {
		return value.substr(0, value.length-1);
	}
}
document.getElementById('experience-valid').addEventListener('keyup', function(event) {
	const value = event.target.value;
	const resultValidate = validateExperience(value);
	if (resultValidate !== value) {
		event.target.value = resultValidate;
	}
});

document.getElementById('submit-button').addEventListener('click', function() {
	const saveData = {
		'name': document.getElementById('name-valid').value,
		'age': document.getElementById('age-valid').value,
		'proffession': document.getElementById('proffession-valid').value,
		'experience': document.getElementById('experience-valid').value,
		'date': document.getElementById('birthdate-valid').value,
	};
	console.log(saveData);
});