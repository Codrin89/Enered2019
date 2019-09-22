const prof = ['FrontEnd', 'Backend', 'DevOps'];
const selectElement = document.getElementById('profession');
for (let i = 0; i < prof.length; i++) {

	selectElement.innerHTML += '<option value="'+prof[i]+'">'+prof[i]+'</option>';
};

document.getElementById('age').addEventListener('keyup', function (event) {
	const value = event.target.value; 
	const resultValidate = validateAge(value);
	if(resultValidate !== value) {
		event.target.value = resultValidate;
	}
});

function validateAge(value) {
	const regExp = new RegExp('^\\d+$');
	var regResult = regExp.test(value);
	if(regResult) {
		return value;
	} else {
		return value.substr(0, value.length - 1);
	}
	
} 

document.getElementById('name').addEventListener('keyup', function (event) {
	const value = event.target.value; 
	const resultValidate = validateName(value);
	if(resultValidate !== value) {
		event.target.value = resultValidate;
	}
});

function validateName(value) {
	const regExp = new RegExp(/^[a-z]+$/i);
	var regResult = regExp.test(value);
	if(regResult) {
		return value;
	} else {
		return value.substr(0, value.length - 1);
	}
	
} 


document.getElementById('years_exp').addEventListener('keyup', function (event) {
	const value = event.target.value; 
	const resultValidate = validateYears(value);
	if(resultValidate !== value) {
		event.target.value = resultValidate;
	}
});

function validateYears(value) {
	const regExp = new RegExp('^\\d+$');
	var regResult = regExp.test(value);
	if(regResult && value.length < 3) {
		return value;
	} else {
		return value.substr(0, value.length - 1);
	}
	
} 

document.getElementById('btn-add').addEventListener('click',function() {
	const saveData = {
		'name':document.getElementById('name').value,
		'age':document.getElementById('age').value,
		'years_exp':document.getElementById('years_exp').value,
		'birthday':document.getElementById('birthday').value,
		'profession':document.getElementById('profession').value,


	};
	console.log(saveData);
});