function HeroData(singleHero){
	 const elementToAppend = document.getElementsByClassName('hero-container')[0];
   elementToAppend.innerHTML += '<h1>' + singleHero.name + '</h1>';
   elementToAppend.innerHTML += '<img src="' + singleHero.picture +'">';
   elementToAppend.innerHTML += '<p>' + singleHero.description + '</p>';
    elementToAppend.innerHTML += '<div class = "headline">Aliases :</div>';
    
   for(var i = 0; i < singleHero.aliases.length; i++) {
      elementToAppend.innerHTML += '<p>' + singleHero.aliases[i] + '</p>';
   }

   elementToAppend.innerHTML += '<div class = "headline">Comics :</div>';
   for (var i = 0; i < singleHero.comics.length; i++) {
      elementToAppend.innerHTML += '<p>' + singleHero.comics[i].name + '</p>';
}

   
   let elementsPower = '<div class = "headline power">Shows :';
   for (var i = 0; i < singleHero.powers.length; i++) {

      elementsPower += '<p>' + singleHero.powers[i]+ '</p>';
   }
  elementsPower += '</div>';
  elementToAppend.innerHTML += elementsPower;

   let elementsShows = '<div class = "headline shows">Shows :';
   for (var i = 0; i < singleHero.shows.length; i++) {

      elementsShows += '<p>' + singleHero.shows[i].name+ '</p>';
   }
  elementsShows += '</div>';
  elementToAppend.innerHTML += elementsShows;
}


function callServer(){
  var xhr = new XMLHttpRequest();
  const id = window.location.href.split('?id=')[1];
  //'http:.........?id=3' --> ['.....', '3']
  const url = 'https://private-anon-5844864436-superheroes.apiary-mock.com/characters/' + id;

  xhr.onreadystatechange = function(response){
    console.log(response.currentTarget.readyState);
    if (response.currentTarget.readyState === 4) {
      var result = JSON.parse(response.currentTarget.responseText);
      HeroData(result);
    }
  }

  xhr.open('GET',url, true);
  xhr.send();
}
callServer();