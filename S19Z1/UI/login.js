document.getElementById('doLogin').addEventListener('click', function() {
	var objectsForLogin = {};
	let inputs = document.getElementsByTagName('input');
	for (let i=0; i< inputs.length; i++) {
		objectsForLogin[inputs[i].name] = inputs[i].value;
	}
	console.log(objectsForLogin);
	doLogin(objectsForLogin);
});

function doLogin(data) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.status === 200 && xhr.readyState === 4) {
			if(xhr.responseText === 'Try again!') {
				alert('bad login');
			} else {
				console.log(JSON.parse(xhr.responseText));
				window.localStorage.setItem('token', JSON.parse(xhr.responseText).token);
				alert('good login');
			}
		}
	}
xhr.open("POST", 'http://localhost/api/login', true);
xhr.send(JSON.stringify(data));
}