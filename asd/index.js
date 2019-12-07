document.getElementById('doLogin').addEventListener('click', function() {
	var objectForLogin = {};
	let inputs = document.getElementsByTagName('input');
	for(let i = 0; i < inputs.length; i++) {
		objectForLogin[inputs[i].name] = inputs[i].value;
	}
	doLogin(objectForLogin);
});

function doLogin(data) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    	if(xhr.status === 200 && xhr.readyState === 4) {
    		console.log(xhr.responseText);
    		if(xhr.responseText === 'Try again!') {
    			alert('bad login');
    		} else {
    			window.localStorage.setItem('token', JSON.parse(xhr.responseText).token);
    			alert('good login');
    		}
    	}
    }
    xhr.open("POST", 'http://localhost/api/login', true);
    xhr.send(JSON.stringify(data));
}