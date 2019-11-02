var listOfNames = ['John Smith', 'Jackie Jackson', 'Chris Jones', 'Amanda Cullen', 'Jeremy Goodwin'];

function listOfNamesToHTML(arrayOfNames) {
	var markup = '';
	for( let i = 0; i < arrayOfNames.length; i++ ) {
		markup += arrayOfNames[i] + '<br>';
	}
	document.getElementsByClassName('list-name')[0].innerHTML = markup;
}
listOfNamesToHTML(listOfNames);

document.getElementById('button-removal').addEventListener('click', function() {
	var nameToRemove = document.getElementById('employee-remove').value;
	console.log(nameToRemove);

	for( let i = 0; i < listOfNames.length; i++) {
		if(listOfNames[i] === nameToRemove) {
			listOfNames.splice(i, 1);
			listOfNamesToHTML(listOfNames);
			break;
		
		}
	}

});