var arrayData = ['Yes', 'No', 'Maybe', 'Ask again later'];

function generateRandomAnswer() {
	var randomNumber = Math.random() * 4;
	randomNumber = Math.floor(randomNumber);
	console.log(randomNumber);
	return randomNumber;
}
generateRandomAnswer();

document.getElementById('submit-question').addEventListener('click', function() {
	var randomNumber = generateRandomAnswer();
	console.log(randomNumber);
	var question = document.getElementById('question').value;
    var answer = arrayData[randomNumber];
	var markup = '<p>'+question+'</p><p>'+answer+'</p>'

	var elementToAppend = document.getElementsByClassName('question-result')[0];
	elementToAppend.innerHTML = markup;


});