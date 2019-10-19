
function renderSuperheroeslist(dataFeed) {
  
  for(let i = 0; i < dataFeed.length ; i++) {
    console.log(dataFeed[i]);
    var markup = '<div class="row"><div class="column">' +dataFeed[i].id+ '</div><div class="column">' +dataFeed[i].name+ '</div><button class="btn btn-goTo" data-id="'+dataFeed[i].id+'">Go to superhero page</button></div>';
   document.getElementsByClassName('superheroes-list')[0].innerHTML += markup;

  }
  addEventlistenerButtons();

}

// renderSuperheroeslist(data1.Characters);

function addEventlistenerButtons() {
  const buttons = document.getElementsByClassName('btn-goTo');
  for (let i = 0; i <buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      console.log(this.dataset.id);
      window.location.href = 'index2.html?id=' + this.dataset.id;
    });
  }
}

function callServer () {
  var xhr = new XMLHttpRequest();
  const url = 'http://private-anon-342bf87c61-superheroes.apiary-mock.com/characters/'
  xhr.onreadystatechange = function(response) {
    console.log(response.currentTarget.readyState);
    if(response.currentTarget.readyState === 4) {
      var result = JSON.parse(response.currentTarget.responseText);
      renderSuperheroeslist(result.Characters);
    }

  }
  xhr.open("GET", url, true);
  xhr.send();
}
callServer();
