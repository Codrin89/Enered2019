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
  "description": "In World War II patriotic solider Steve Rogers recipient of the \"Super Soldier Serum\" became the living symbol of freedom, Captain America. Left for dead while frozen in ice, the star-spangled hero with an indestructible shield awoke years later to continue his never-ending battle for liberty.",
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

renderHeroData(data);