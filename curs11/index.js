 var data1 = {
  "Characters": [
    {
      "id": "1",
      "name": "Captain America"
    },
    {
      "id": "2",
      "name": "Spider Man"
    },
    {
      "id": "3",
      "name": "Thor"
    },
    {
      "id": "4",
      "name": "Storm"
    },
    {
      "id": "5",
      "name": "Invisible Woman"
    },
    {
      "id": "6",
      "name": "Ultron"
    },
    {
      "id": "7",
      "name": "Loki"
    },
    {
      "id": "8",
      "name": "Magneto"
    },
    {
      "id": "9",
      "name": "Mystique"
    },
    {
      "id": "10",
      "name": "Ronan"
    }
  ]
};
console.log(data1);


function rendersuperheroesList(dataFeed) {
  var markup = '<div class="row"><div class="column">1</div><div class="column">Captain America</div></div>';
  document.getElementsByClassName('superheroes-list')[0].innerHTML += markup;
  console.log(dataFeed);

  for(let i = 0; i < dataFeed.length ; i++) {
    console.log(dataFeed[i]);
      var markup = '<div class="row"><div class="column">' +dataFeed[i].id+ '</div><div class="column">' +dataFeed[i].name+ '</div><button class="btn btn-goTo" data-id="'+dataFeed[i].id+'">Go to superhero page</button></div>';
      document.getElementsByClassName('superheroes-list')[0].innerHTML += markup;


  }
  addEventListenerButtons();
}

rendersuperheroesList(data1.Characters);

function addEventListenerButtons() {
  const buttons  = document.getElementsByClassName('btn-goTo');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
      console.log(this.dataset.id);
      window.location.href = 'singleHero.html';
    });
  }
}