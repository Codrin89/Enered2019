
var arrayData = ['Yes', 'No', 'Maybe', 'Ask again later'];


function generateRandomAnswer() {
	var randomNumber = Math.random() * 4;
	randomNumber = Math.floor(randomNumber);
	return randomNumber;
}

// generateRandomAnswer();

// addEventListener on button

// inside addEventListener generate random answer

// inside addEventListener after generating random answer write the html with the output
// Example output:
// <p>Will i get rich?</p>
// <p>Ask again later</p>

document.getElementById('submit-question').addEventListener('click', function() {
	var randNumber = generateRandomAnswer();
	var question = document.getElementById('question').value;
	var answer = arrayData[randNumber];
	var markup = '<p>'+question+'</p><p>'+answer+'</p>';

	var elementToAppend = document.getElementsByClassName('question-result')[0];
	elementToAppend.innerHTML = markup;




});











