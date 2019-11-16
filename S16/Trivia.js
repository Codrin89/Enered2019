function initGame() {
	let sections = document.getElementsByClassName('register-page');
	for (let i=0; i<sections.length; i++) {
		sections[i].classList.remove('show');
	}
	document.getElementsByClassName('game-screen1')[0].classList.add('show');
}
initGame();

document.getElementById('choose-category').addEventListener('click', function() {
	var data = {
		"username": document.getElementById('name').value,
		"email": document.getElementById('email').value,
		"phone": document.getElementById('phone').value
	}
	console.log(data);

});