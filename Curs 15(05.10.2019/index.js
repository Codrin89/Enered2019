
const arrayOfUsers = [
{
	'username': 'Joe',
	'password':   'admin123*'
},
{
	'username': 'Kurt',
	'password' :  'strongpassword'
},
{
	'username': 'Bill',
	'password'  : '123*pass'
},
{
	'username': 'Clint',
	'password':   'password123+'
}
];

document.getElementById("btn-submit").addEventListener('click', function() {
	  const data = { 
      'username':document.querySelector('input[type="text"]').value, 
      'password': document.querySelector('input[type="password"]').value
};
console.log(data);
console.log(arrayOfUsers);
for(let i=0; i < arrayOfUsers.length; i++) {
	console.log(arrayOfUsers[i]);
	if(arrayOfUsers[i].username === data.username) {
		console.log('username matches!');
		// strong password????
		const text = 'admin123*';
		const regExpNumberLetter = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
		const resultOfRegExp=regExpNumberLetter.test(text);
		console.log(resultOfRegExp);
// lower case, number, 8 characters\
var text1 = 'admin2132132' 
var newRegExpNumberLetter = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
var resultOfNewRegExp = newRegExpNumberLetter.test(text1);
console.log(resultOfNewExp);

var text2='Admin123'
var reverseRegExp = new RegExp("^(?=.*?[A-Z]).{8,}$");
var reverseRegExpResult = reverseRegExp.test(text2);
console.log(!reverseRegExpResult);
	} else {
		console.log('username not found');
	}
	}
});

document.addEventListener('keydown', function(event) {
	console.log(event);
	console.log(event.keyCode);
	if(event.keyCode ===13) {
		alert('you have pressed enter!');
	}
}); 