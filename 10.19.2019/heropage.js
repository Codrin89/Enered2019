function renderHeroData(singleHeroData) {
	console.log(singleHeroData);
	const elementToAppend = document.getElementsByClassName('hero-container')[0];
	elementToAppend.innerHTML = '<div class="col-sm-4"><h1>' + singleHeroData.name + '</h1><img src="' + singleHeroData.picture + '" /></div><div class="col-sm-8"><p>' + singleHeroData.description + '</p></div>';
	
	elementToAppend.innerHTML += '<div class="col-sm-12"><h5>Aliases:</h5></div>';
	const aliases = singleHeroData.aliases;
	for (let i = 0; i<aliases.length; i++) {
		elementToAppend.innerHTML += '<p>' + singleHeroData.aliases[i] + '</p>';
	}

	elementToAppend.innerHTML += '<div class="col-sm-12"><h5>Comics:</h5></div>';
	const comics = singleHeroData.comics;
	for (let i = 0; i<comics.length; i++) {
		elementToAppend.innerHTML += '<p>' + singleHeroData.comics[i].name + '</p>';
	}
	
	elementToAppend.innerHTML += '<div class="col-sm-12"><h5>Powers:</h5></div>';
	const powers = singleHeroData.powers;
	for (let i = 0; i<powers.length; i++) {
		elementToAppend.innerHTML += '<p>' + singleHeroData.powers[i] + '</p>';
	}

	elementToAppend.innerHTML += '<div class="col-sm-12"><h5>Shows:</h5></div>';
	const shows = singleHeroData.shows;
	for (let i = 0; i<shows.length; i++) {
		elementToAppend.innerHTML += '<p>' + singleHeroData.shows[i].name + '</p>';
	}

}


function callServer(){
	var xhr = new XMLHttpRequest();
	const id = window.location.href.split('?id=')[1];
	const url = 'https://private-anon-df9e4214ec-superheroes.apiary-mock.com/characters/' + id;
	xhr.onreadystatechange = function(response) {
		console.log(response.currentTarget.readyState);
		if(response.currentTarget.readyState === 4) {
			var result = JSON.parse(response.currentTarget.responseText);
			document.getElementById('hero-page').innerHTML = id;
			renderHeroData(result);
		}
	}
	xhr.open("GET", url, true);
	xhr.send();
}

callServer();