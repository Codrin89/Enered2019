var listOfNames = ['John Smith', 'Jackie Jackson', 'Chris Jones', 'Amanda Cullen', 'Jeremy Goodwin'];

function listOfNamesToHTML(arrayOfNames) {
	var markup = '';
	for(let i = 0; i < arrayOfNames.length; i++) {
		markup += arrayOfNames[i] + '<br>';
		console.log(markup);
	}
	document.getElementsByClassName('list-names')[0].innerHTML = markup;
}

listOfNamesToHTML(listOfNames);

document.getElementById('button-removal').addEventListener('click', function() {

	// get value from input
	var nameToRemove = document.getElementById('input').value;
	console.log(nameToRemove);

	for(let i = 0; i < listOfNames.length; i++) {
		if(listOfNames[i] === nameToRemove) {
			listOfNames.splice(i, 1);
			listOfNamesToHTML(listOfNames);
			break;
		}
	}

});
