document.getElementById('btn-submit').addEventListener('click', function(){
	const age = document.querySelector('input[type="number"]').value;
	if (age > 16) {
		console.log('Ok to drive!');
	}else{
		console.log('Underage to drive!');
	}
});