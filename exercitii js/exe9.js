document.getElementById('submit').addEventListener('click', function() {
	const age = document.querySelector('input[type="number"]').value;
	if (age > 16) {
		console.log('ok to drive');
	} else {
		console.log('underage to drive');
	}
});