var data = {
  "aliases": [
    "Steven Grant Rodgers",
    "Winghead",
    "Shield-Slinger",
    "The First Avenger",
    "Sentinel of Liberty",
    "The Living Legend",
    "Star-Spangled Avenger"
  ],
  "alignment": "Good",
  "comics": [
    {
      "id": "2",
      "name": "Amazing Spider-Man"
    },
    {
      "id": "3",
      "name": "Avengers"
    },
    {
      "id": "5",
      "name": "Incredible Hulk"
    },
    {
      "id": "6",
      "name": "S.H.I.E.L.D."
    }
  ],
  "description": "In World War II patriotic solider Steve Rogers recipient of the 'Super Soldier Serum' became the living symbol of freedom, Captain America. Left for dead while frozen in ice, the star-spangled hero with an indestructible shield awoke years later to continue his never-ending battle for liberty.",
  "gender": "Male",
  "id": 1,
  "name": "Captain America",
  "picture": "http://i.imgur.com/hPsu2lH.png",
  "powers": [
    "Superhuman",
    "Boxing",
    "Judo"
  ],
  "shows": [
    {
      "id": "1",
      "name": "Agents of S.H.I.E.L.D."
    },
    {
      "id": "2",
      "name": "Ultimate Spider-Man"
    },
    {
      "id": "4",
      "name": "Fantastic Four"
    },
    {
      "id": "5",
      "name": "Iron Man"
    },
    {
      "id": "6",
      "name": "The Incredible Hulk"
    }
  ],
  "universe": "Earth-616"
}
console.log(data);
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



HeroData(data);