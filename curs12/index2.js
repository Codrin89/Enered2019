function renderHeroData(singleHeroData) {
	const elementToAppend = document.getElementsByClassName('hero-container')[0];
	elementToAppend.innerHTML += '<h1>' + singleHeroData.name + '</h1>';
    elementToAppend.innerHTML += '<img class="hero-picture" src= "'+singleHeroData.picture+'"/>';
    elementToAppend.innerHTML += '<p>' +singleHeroData.description+ '</p>';
    elementToAppend.innerHTML += '<div class="headline">Alliases</div>'
    const aliases = singleHeroData.aliases;
    console.log(aliases);
    for(let i = 0; i < aliases.length; i++) {
    	elementToAppend.innerHTML += '<p>' + aliases[i] +'</p>';
    }
    elementToAppend.innerHTML += '<div class="headline">comics</div>'
    const comics = singleHeroData.comics;
    console.log(comics);
    for(let i = 0; i < comics.length; i++) {
    	elementToAppend.innerHTML += '<p>' + comics[i].name +'</p>';
    }
    elementToAppend.innerHTML += '<div class="headline">powers</div>'
    const powers = singleHeroData.powers;
    console.log(powers);
    for(let i = 0; i < powers.length; i++) {
    	elementToAppend.innerHTML += '<p>' + powers[i] +'</p>';
    }
    elementToAppend.innerHTML += '<div class="headline">shows</div>'
    const shows = singleHeroData.shows;
    console.log(shows);
    for(let i = 0; i < shows.length; i++) {
    	elementToAppend.innerHTML += '<p>' + shows[i].name +'</p>';
    }

}

//renderHeroData(data);

function callServer() {
  var xhr = new XMLHttpRequest();
  const id = window.location.href.split('?id=')[1];
  const url = 'http://private-anon-f2ac8328c0-superheroes.apiary-mock.com/characters/id' + id;
 xhr.onreadystatechange = function(response) {
    console.log(response.currentTarget.readyState);
    if(response.currentTarget.readyState === 4 ){
      var result = JSON.parse(response.currentTarget.responseText);
      renderHeroData(result);
    }
  }
  xhr.open("get", url, true);
  xhr.send();
}
callServer();