var arrayData = ['Yes', 'No', 'Maybe', 'Ask again later'];

function generateRandomAnswer() {
	var randomNumber = Math.random()*4;
	randomNumber = Math.floor(randomNumber);
	return randomNumber;
}
generateRandomAnswer();

document.getElementById('submit').addEventListener('click', function() {
	var result = generateRandomAnswer();
	var question = document.getElementById('question').value;
	var answer = arrayData[result];

	var markup = '<p>' +question+ '</p><p>' +answer+ '</p>';
	const elementToAppend = document.getElementsByClassName('question-result')[0];
    elementToAppend.innerHTML = markup;
});