var url = "https://cors-anywhere.herokuapp.com/https://feelittrivia.herokuapp.com/upload"
var questions = [];
var currentQuestion = 0;
let score = 0;

function initGame() {
	let sections = document.getElementsByClassName('register-page');
	for (let i=0; i<sections.length; i++) {
		sections[i].classList.remove('show');
	}
	var questions = [];
	var currentQuestion = 0;
	let score = 0;
	document.getElementById('game1').classList.add('show');
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('phone').value = '';
}
initGame();

document.getElementById('button-submit').addEventListener('click', function() {
	var data = {
		"username": document.getElementById('name').value,
		"email": document.getElementById('email').value,
		"phone": document.getElementById('phone').value
	}
	console.log(data);
	localStorage.setItem('trivia-info', JSON.stringify(data));
	getData();
});

function getData() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.status === 200 && xhr.readyState === 4){
		questions = JSON.parse(xhr.response);
		startGame();

		}
	};
	xhr.open("GET", url, true);
	xhr.setRequestHeader("X-Parse-Application-Id", "feelittrivia");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send();
}


function startGame() {
	document.getElementById('game1').classList.remove('show');
	document.getElementById('game2').classList.add('show');
	renderQuestion(currentQuestion);
}
function finishGame() {
	document.getElementById('game2').classList.remove('show');
	document.getElementById('game3').classList.add('show');
	let userData = JSON.parse(localStorage.getItem('trivia-info'));
	document.getElementById('name-info').innerHTML = userData.username;
	document.getElementById('email-info').innerHTML = userData.email;
	document.getElementById('phone-info').innerHTML = userData.phone;
	document.getElementById('score-info').innerHTML = score + '/10'; 
}

function renderQuestion(position) {
	if(position>9) {
		finishGame();
		return;
	}
	var myCurrentQuestion = questions[position];
	document.getElementById('question').innerHTML = myCurrentQuestion.question;
	var answers = document.querySelectorAll('.card-answer label');
	for(let i=0; i<answers.length; i++) {
		answers[i].innerHTML = myCurrentQuestion.answers[i];
	}
}

var questionOptions = document.getElementsByClassName('card-answer');
for (let i=0; i<questionOptions.length; i++) {
	questionOptions[i].addEventListener('click', function() {
		for(let i=0; i<questionOptions.length; i++) {
			questionOptions[i].classList.remove('active');
		}
		this.classList.add('active');
	});
}
document.getElementById('button-next').addEventListener('click', function(){
	let answerCard = document.getElementsByClassName('card-answer');
	if(document.querySelector('.card-answer.active')) {
		var answer = document.querySelector('.card-answer.active label').innerHTML;
		if (answer === questions[currentQuestion].correctAnswer) {
			document.querySelector('.card-answer.active').classList.add('true');
			setTimeout(function() {
				for(let i=0; i<answerCard.length; i++) {
					answerCard[i].classList.remove('active');
					answerCard[i].classList.remove('false');
					answerCard[i].classList.remove('true');
				}
				score += 1;
				currentQuestion += 1;
				renderQuestion(currentQuestion);

			}, 2000);
		} else {
			document.querySelector('.card-answer.active').classList.add('false');
			setTimeout(function() {
				for(let i=0; i<answerCard.length; i++) {
					answerCard[i].classList.remove('active');
					answerCard[i].classList.remove('false');
					answerCard[i].classList.remove('true');
				}
				currentQuestion += 1;
				renderQuestion(currentQuestion);

			}, 2000);
		}
	} else {
		alert('select an answer');
	}
});

document.getElementById('reset').addEventListener('click', function() {
	initGame();
});


/*XHR 
connect to endpoint
readystate


bubble sort
divide et impera
turnurile din hanoi
quick sort*/