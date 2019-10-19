function renderSuperheroesList(dataFeed) {
	for (let i = 0; i < dataFeed.length; i++) {
		var markup = '<div class="row"><div class="col-sm-1">'+ dataFeed[i].id +'</div><div class="col-sm-11">'+ dataFeed[i].name +'<button class="btn btn-info btn-goTo" data-id="'+dataFeed[i].id+'">Go to superhero page</button></div></div>';
		document.getElementsByClassName('superheroes-list')[0].innerHTML += markup;
	}
	addEventListenerButtons();
}


function addEventListenerButtons() {
	const buttons = document.getElementsByClassName('btn-goTo');
	console.log(buttons);
	for ( let i=0; i<buttons.length; i++) {
		buttons[i].addEventListener('click', function(){
			window.location.href = 'singleHero.html?id=' + this.dataset.id;
		});
	}
}

function callServer(){
	var xhr = new XMLHttpRequest();
	const url = 'http://private-anon-df9e4214ec-superheroes.apiary-mock.com/characters/';
	xhr.onreadystatechange = function(response) {
		console.log(response.currentTarget.readyState);
		if(response.currentTarget.readyState === 4) {
			var result = JSON.parse(response.currentTarget.responseText);
			renderSuperheroesList(result.Characters);
		}
	}
	xhr.open("GET", url, true);
	xhr.send();
}

callServer();