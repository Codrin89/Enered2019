const prof = ['Frontend', 'Backend', 'DevOps'];
const container = document.getElementById('proffesion');
for (let i = 0; i < prof.length; i++) {
	container.innerHTML += '<option value="'+prof[i]+'">'+prof[i]+'</option>';
} 
document.getElementById('age').addEventListener('keyup', function(event) {
	const value = event.target.value;
	const resultValidate = validateAge(value);
	if(resultValidate !== value) {
		event.target.value = resultValidate;  
	}
});
function validateAge(value){
	const regExp = new RegExp('^\\d+$');
	const z = regExp.test(value);
	if (z) {
		return value; 
	} else {
		return value.substr(0, value.length - 1);
	}
};

document.getElementById('name').addEventListener('keyup', function(event) {
	const value = event.target.value;
	const resultValidate = validateName(value);
	if(resultValidate !== value) {
		event.target.value = resultValidate;  
	}
});
function validateName(value){
	const regExp = new RegExp('^[a-zA-Z]+$');
	const z = regExp.test(value);
	if (z) {
		return value; 
	} else {
		return value.substr(0, value.length - 1);
	}
};

document.getElementById('years_exp').addEventListener('keyup', function(event) {
	const value = event.target.value;
	const resultValidate = validateYears_exp(value);
	if(resultValidate !== value) {
		event.target.value = resultValidate;  
	}
});
function validateYears_exp(value){
	const regExp = new RegExp('^\\d+$');
	const z = regExp.test(value);
	if (z && value.length <3) {
		return value; 
	} else {
		return value.substr(0, value.length - 1);
	}
};

document.getElementById('button').addEventListener('click', function(){
	const  saveData = {
		'name' : document.getElementById('name').value,
		'age' :document.getElementById('age').value,
		'years_exp' :document.getElementById('years_exp').value,
		'birthdate' :document.getElementById('birthdate').value,
		'proffesion' :document.getElementById('proffesion').value,
	};
	console.log(saveData);
});
