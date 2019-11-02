var arrayOfParticipants = [];

function generateRandomNumber(param) {
	var randomNumber = Math.random()*param;
	randomNumber = Math.floor(randomNumber);
	return randomNumber;
}

function listOfParticipants() {
	var loop = true;
	while (loop) {
		var name = prompt('What is the name?');
		if (name === '') {
			loop = false;
		} else {
			arrayOfParticipants.push(name);
		}
	}
}

function selectWinner() {
	listOfParticipants();
	var result = generateRandomNumber(arrayOfParticipants.length);
	return arrayOfParticipants[result];
}

function listOfNamesToHTML(arrayOfPeople) {
	var markup = '';
	var winner = selectWinner();
	for (let i =0; i<arrayOfPeople.length; i++) {
		markup += 'Enter a name: ' +arrayOfPeople[i]+ '<br>';
	}
	markup += 'Enter a name: <br>The winner is...' +winner+ '.';
	document.getElementById('contestants').innerHTML = markup;
}


listOfNamesToHTML(arrayOfParticipants);
