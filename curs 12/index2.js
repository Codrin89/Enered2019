function renderHeroData(singleHeroData) {
  const elementToAppend = document.getElementsByClassName('hero-container')[0];
  elementToAppend.innerHTML += '<h1>' + singleHeroData.name + '</h1>';
  elementToAppend.innerHTML += '<img class="hero-picture" src="' +singleHeroData.picture+ '"/>'
  elementToAppend.innerHTML += '<p>' + singleHeroData.description + '</p>';
  //aliases
  elementToAppend.innerHTML +='<div class="headline">Aliases</div>'
  const aliases = singleHeroData.aliases;
  for(let i = 0; i <aliases.length; i++) {
    elementToAppend.innerHTML += '<p>' + aliases[i] + '</p>'
  }
  //comics
   elementToAppend.innerHTML +='<div class="headline">comics</div>'
  const comics = singleHeroData.comics;
  for(let i = 0; i <comics.length; i++) {
    elementToAppend.innerHTML += '<p>' + comics[i].name + '</p>'

  }
  elementToAppend.innerHTML +='<div class="headline">powers</div>'
  const powers = singleHeroData.powers;
  for(let i = 0; i <powers.length; i++) {
    elementToAppend.innerHTML += '<p>' + powers[i] + '</p>'
  }
  elementToAppend.innerHTML +='<div class="headline">shows</div>'
  const shows = singleHeroData.shows;
  for(let i = 0; i <shows.length; i++) {
    elementToAppend.innerHTML += '<p>' + shows[i].name + '</p>'
  }
}

function callServer () {
  var xhr = new XMLHttpRequest();
  const id = window.location.href.split('?id=')[1];
  const url = 'http://private-anon-342bf87c61-superheroes.apiary-mock.com/characters/' + id;
  xhr.onreadystatechange = function(response) {
    console.log(response.currentTarget.readyState);
    if(response.currentTarget.readyState === 4) {
      var result = JSON.parse(response.currentTarget.responseText);
      renderHeroData(result);
    }

  }
  xhr.open("GET", url, true);
  xhr.send();
}
callServer();