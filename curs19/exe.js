const arrayOfUsers = [
{	
		'username': 'Joe',
		'password': 'Admin123*'
},
{
		'username': 'Kurt',
		'password': 'strongpassword'
},
{
		'username': 'Bill',
		'password': '123*'
},
{
		'username': 'Clint',
		'password': 'password123+'
}
];

document.getElementById('btn-submit').addEventListener('click', function(){
	const data = {
		'username' : document.querySelector('input[type="text"]').value,
		'password' : document.querySelector('input[type="password"]').value
	};
	console.log('----------------------');
	console.log(data);
	console.log(arrayOfUsers);
	for (let i = 0; i < arrayOfUsers.length; i++) {
		console.log(arrayOfUsers[i]);
		if(arrayOfUsers[i].username === data.username && arrayOfUsers[i].password === data.password) 
			{
				
					console.log('username matches!');

					//strong password??

					var regExpNumberLetter = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
					var result = regExpNumberLetter.test(data.password);
					console.log(result);
					if( result == true)
					{
						console.log('strong password');
					}
						// alert('strong password');
						
							else {
									console.log('not a strong password');
								}
						
			}
				

			else {
					console.log('incorrect username or password');
			} 
		
	}
});	

// lower case, uppercase, numbers, special characters, 8 length
// var text = 'A23';
// var regExp = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
// var result1 = regExp.test(text);
// console.log(result1);

// uppercase, 8 length
var text = 'aDmin3424324';
var reverse = new RegExp('^(?=.*?[A-Z]).{8,}$');
var result2 = reverse.test(text);
console.log(result2);

// not uppercase, 8 length
var text = 'aDmin3424324';
var reverse = new RegExp('^(?=.*?[A-Z]).{8,}$');
var result2 = reverse.test(text);
console.log(!result2);



document.addEventListener('keydown', function(event){
	if(event.keyCode === 13){
			const data = {
		'username' : document.querySelector('input[type="text"]').value,
		'password' : document.querySelector('input[type="password"]').value
	};
	console.log('----------------------');
	console.log(data);
	console.log(arrayOfUsers);
	for (let i = 0; i < arrayOfUsers.length; i++) {
			if(arrayOfUsers[i].username === data.username && arrayOfUsers[i].password === data.password) 
			{
				
					console.log('username matches!');

					//strong password??

					var regExpNumberLetter = new RegExp(".{8,}$");
					var result = regExpNumberLetter.test(data.password);
					if( result == true)
					{
						console.log('strong password');
					}
						
					else {
						console.log('not a strong password');
						}				
		 }
			else {
					console.log('incorrect username or password');
			} 
	}	
}
});