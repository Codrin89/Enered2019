function checkAge() {
	let age =document.querySelector('input[type="number"]').value;
	console.log(age);
	if (age < 16) {
	console.log("You are not old enough to legally drive.");
} else {
	console.log("You are old enough to legally drive.");
}
}

document.getElementById('btn-submit').addEventListener('click', function(event) {
	checkAge();
});




