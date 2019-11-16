var url = "https://cors-anywhere.herokuapp.com/https://feelittrivia.herokuapp.com/upload"

var question = [];
var currentQuestion = 0;
function initGame() {
	let sections = document.getElementsByClassName('register-page');
	for(let i = 0; i < sections.length; i++) {
		sections[i].classList.remove('show');
	}
	document.getElementById('game1').classList.add('show');
}
initGame();

document.getElementById('button-submit').addEventListener('click', function() {
	var Data = {
		"Username": document.getElementById("name").value,
		"email": document.getElementById("email").value,
		"phone": document.getElementById("phone").value,
	}
	localStorage.setItem("Data", JSON.stringify(Data));
	console.log(Data);
	getData();

 });
function getData() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.status === 200 && xhr.readyState === 4) {
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
	document.getElementById('game2').classList.add('show')
	renderQuestion(0);
}

function renderQuestion(position) {
	var myCurrentQuestion = questions[position];
	document.getElementById('question').innerHTML = myCurrentQuestion.question;
	var answers = document.querySelectorAll('.card-answer label');
	for(let i = 0; i < answers.length; i++) {
		answers[i].innerHTML = myCurrentQuestion.answers[i];
	}
}

var questionOptions = document.getElementsByClassName('card-answer');
for(let i = 0; i < questionOptions.length; i++) {
	questionOptions[i].addEventListener('click', function() {
		for(let i = 0; i < questionOptions.length; i++) {
			questionOptions[i].classList.remove('active');
		}
		this.classList.add('active');
	});
}

document.getElementById('button-next').addEventListener('click', function() {
	if(document.querySelector('.card-answer.active')) {
		var answer = document.querySelector('.card-answer.active label').innerHtml;
		if(answer === questions[currentQuestion].correctAnswer) {
			alert('correct answer');
		} else {
			alert('incorrect answer');
		}
	} else {
		alert('select an answer');
	}

});