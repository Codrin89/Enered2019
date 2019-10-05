const arrayOfUsers = [
	{	'username': 'Joe',
		'password': 'admin123*'
	},
	{	'username': 'Kurt',
		'password': 'strongpassword'
	},
	{	'username': 'Bill',
		'password': '123*pass'
	},
	{	'username': 'Clint',
		'password': 'password123+'
	}
];
function checkData() {
	const data = {
		'username': document.querySelector('input[type="text"]').value,
		'password': document.querySelector('input[type="password"]').value,
	}
	console.log(data);
	console.log(arrayOfUsers);
	let data1 = {};
	for (let i=0; i<arrayOfUsers.length; i++) {
		if (arrayOfUsers[i].username === data.username && arrayOfUsers[i].password === data.password ) {
			data1.username = arrayOfUsers[i].username;
			data1.password = arrayOfUsers[i].password;
		}
	}
	console.log(data1.username);
	if (data1 && data1.username) {
		console.log('Data matches');		
	} else {
		console.log("I don't know you!");
	}
}

document.getElementById('btn-submit').addEventListener('click', function(event) {
	checkData();
});

document.addEventListener('keydown', function(event) {
	console.log(event);
	console.log(event.keyCode);
	if(event.keyCode === 13) {
		checkData();
	}
});


const text = 'admin3ksjdksj';
const regExpNumberLetter = new RegExp("^(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
const resultOfRegExp = regExpNumberLetter.test(text);
console.log(resultOfRegExp);

const text1 = 'Aadmin3ksjdksj';
const newregExpNumberLetter = new RegExp("^(?=.*?[A-Z]).{8,}$");
const reverseResultOfNewRegExp = newregExpNumberLetter.test(text1);
console.log(!reverseResultOfNewRegExp);