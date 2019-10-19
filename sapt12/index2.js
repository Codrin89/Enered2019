function renderHeroData(singleHeroData) {
	const elementToAppend = document.getElementsByClassName('hero-container')[0];
	elementToAppend.innerHTML += '<h1>' + singleHeroData.name + '</h1>';
	elementToAppend.innerHTML += '<img class="hero-picture" src="' + singleHeroData.picture + '"/>';
	elementToAppend.innerHTML += '<p>' + singleHeroData.description + '</p>';
	elementToAppend.innerHTML += '<div class="headline">Alliases</div>'
	const aliases = singleHeroData.aliases;
	for(let i = 0; i < aliases.length; i++) {
		elementToAppend.innerHTML += '<p>'+ aliases[i] +'</p>';
	}
	elementToAppend.innerHTML += '<div class="headline">Comics</div>'
	const comics = singleHeroData.comics;
	console.log(comics);
	for(let i = 0; i < comics.length; i++) {
		elementToAppend.innerHTML += '<p>'+ comics[i].name +'</p>';
	}
}

function callServer() {
  var xhr = new XMLHttpRequest();
  const id = window.location.href.split('?id=')[1];
  const url = 'https://private-anon-3d5fe0715a-superheroes.apiary-mock.com/characters/' + id;

  xhr.onreadystatechange = function(response) {
    console.log(response.currentTarget.readyState);
    if(response.currentTarget.readyState === 4) {
      console.log(response.currentTarget.responseText);
      var result = JSON.parse(response.currentTarget.responseText);
      renderHeroData(result);
    }
  }

  xhr.open("GET", url, true);
  xhr.send();
}
callServer();