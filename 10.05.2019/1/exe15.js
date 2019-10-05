const arrayOfUsers = [
	{
		'username': 'Joe',
		'password': 'admin123'
	},
	{
		'username': 'Kurt',
		'password': 'strongpassword'
	},
	{
		'username': 'Bill',
		'password': '123*pass'
	},
	{
		'username': 'Clint',
		'password': 'password123+'
	}
]

document.getElementById('btn-submit').addEventListener('click', function(){
	const data = {
		'username': document.querySelector('input[type="text"]').value,
		'password': document.querySelector('input[type="password"]').value
	}
	console.log('-----------');
	console.log(data);
	console.log(arrayOfUsers);
	console.log('-----------');
	for (let i = 0; i < arrayOfUsers.length; i++) {
		console.log(arrayOfUsers[i]);
		if (arrayOfUsers[i].username === data.username && arrayOfUsers[i].password === data.password) {
			console.log('username matches');
		}else{
			console.log('username not found');
		}
	}
});

document.addEventListener('keydown', function(event) {
	if(event.keyCode === 13) {
		const data = {
			'username': document.querySelector('input[type="text"]').value,
			'password': document.querySelector('input[type="password"]').value
		}
		console.log('-----------');
		console.log(data);
		console.log(arrayOfUsers);
		console.log('-----------');
		for (let i = 0; i < arrayOfUsers.length; i++) {
			console.log(arrayOfUsers[i]);
			if (arrayOfUsers[i].username === data.username && arrayOfUsers[i].password === data.password) {
				console.log('username matches');
				// strong password ???

				const regExpNumberLetter = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
				if (regExpNumberLetter.test(data.password)) {
					console.log('strong password, char and number and minimum 8 length');
				}
			}else{
				console.log('username not found');
			}
		}
	}
})

var text = 'tes*@DFGfdt123';
var regExpNumberLetter = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
var resultOfRegExp = regExpNumberLetter.test(text);
console.log(resultOfRegExp);

var text1 = 'admin21321312';
var newRegExpNumberLetter = new RegExp("^(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
var resultOfNewRegExp = newRegExpNumberLetter.test(text1);
console.log(resultOfNewRegExp);

var text2 = 'Admin123';
var ReverseRegExp = new RegExp("^(?=.*?[A-Z]).{8,}$");
var reverseRegExpResult = ReverseRegExp.test(text2);
console.log(!reverseRegExpResult);