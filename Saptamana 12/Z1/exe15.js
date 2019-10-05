const arrayOfUsers = [
{
	'username': 'Joe',
	'password': 'admin123*'
},

{

	'username': 'Kurt',
	'password':'strongpassword'

},


{

	'username': 'Bill',
	'password':'123*pass'

},

{

	'username': 'Clint',
	'password':'password123+'

},



];



document.getElementById('btn-submit').addEventListener('click', function () {
	const data = {
		'username':document.querySelector('input[type="text"]').value,
		'password':document.querySelector('input[type="password"]')


	}
	console.log('-------->');
	console.log(data);
	console.log(arrayOfUsers);
	console.log('--------->');

	for (let i=0; i<arrayOfUsers.length;i++) {
		console.log(arrayOfUsers[i]);
		if (arrayOfUsers[i].username === data.username && arrayOfUsers[i].password === data.password) {
			console.log ('username matches!');
		} else {
			console.log('username not found');
		}
	}
});


document.addEventListener('keydown', function(event) {
	console.log(event);
	console.log(event.keyCode);
	if(event.keyCode === 13) {
		alert('you have pressed enter!');
	}
});

const text = 'Admin123*';
// lower case, upper case, number, special character, 8 characters
const regExpNumberLetter = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
const resultOfRegExp = regExpNumberLetter.test(text);
console.log(resultOfRegExp);

//lower case, number, 8 characters\
var text1 = 'admin1231234213';
var newRegExpNumberLetter = new RegExp("^(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
var resultofNewRegExp = newRegExpNumberLetter.test(text1);
console.log(resultofNewRegExp);

var text2 = 'Admin123';
var reverseRegExp = new RegExp ("^(?=.*?[a-z]).{8,}$");
var reverseRegExpResult = reverseRegExp.test(text2);
console.log(!reverseRegExpResult);