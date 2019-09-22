const prof = ['FrontEnd', 'Backend', 'DevOps'];
const selectElement = document.getElementById('proffession');
for (let i = 0; i < prof.length; i++) {
    selectElement.innerHTML += '<option value="'+prof[i]+'">'+prof[i]+'</option>';
}
document.getElementById('age').addEventListener('keyup', function(event) {
   const value = event.target.value;
   const stringResult = validateAge(value);
   if(stringResult !== value) {
   	    const resultValidate = validateAge;
   		event.target.value = stringResult;
   }
});

function validateAge (value) {
	const reg = new RegExp('^\\d+$');
	const resultRegExp = reg.test(value);
	if(resultRegExp) {
		return value;
	} else {
		return value.substr(0, value.length - 1);
	}
}
document.getElementById('name').addEventListener('keyup', function(event) {
   const value = event.target.value;
   const stringResult = validateName(value);
   if(stringResult !== value) {
   	    const resultValidate = validateName;
   		event.target.value = stringResult;
   }
});

function validateName (value) {
	const reg = new RegExp('^[a-zA-Z]+$');
	const resultRegExp = reg.test(value);
	if(resultRegExp) {
		return value;
	} else {
		return value.substr(0, value.length - 1);
	}
}
document.getElementById('years_exp').addEventListener('keyup', function(event) {
   const value = event.target.value;
   const stringResult = validateYears_exp(value);
   if(stringResult !== value) {
   	    const resultValidate = validateYears_exp;
   		event.target.value = stringResult;
   }
});

function validateYears_exp (value) {
	const reg = new RegExp('^\\d+$');
	const resultRegExp = reg.test(value);
	if(resultRegExp && value.length < 3) {
		return value;
	} else {
		return value.substr(0, value.length - 1);
	}
}



document.getElementById('btn-save').addEventListener('click', function() {
	const saveData = {
		'name': document.getElementById('name').value,
		'age': document.getElementById('age').value,
		'birthdate': document.getElementById('birthdate').value,
		'proffession': document.getElementById('proffession').value,
		'years_exp': document.getElementById('years_exp').value
	};
	console.log(saveData);
})