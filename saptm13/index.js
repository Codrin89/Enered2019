
function renderSuperheroesList(dataFeed) {

  for(let i = 0; i < dataFeed.length ; i++) {
    var markup = '<div class="row"><div class="column">' +dataFeed[i].id+ '</div><div class="column">' +dataFeed[i].name+ '</div><button class="btn btn-goTo" data-id="'+dataFeed[i].id+'">Go to superhero page</button></div>';
    document.getElementsByClassName('superheroes-list')[0].innerHTML += markup;
  }
  addEventListenerButtons();
}

// renderSuperheroesList(data1.Characters);

function addEventListenerButtons() {
  const buttons = document.getElementsByClassName('btn-goTo');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      console.log(this.dataset.id);
      window.location.href = 'beanca.html?id' + this.dataset.id});
   
  }
}

function callServer() {
  var xhr = new XMLHttpRequest();
  const id = window.location.href.split('?id=')[1]
  const url = 'http://private-anon-7bf0c2c754-superheroes.apiary-mock.com/characters/' + id;

  xhr.onreadystatechange = function(response) {
    console.log(response.currentTarget.readyState);
    if(response.currentTarget.readyState === 4){
      var result = JSON.parse(response.currentTarget.responseText);
      renderSuperheroesList(result.Characters);     bv 

    }
  }

 xhr.open("GET", url, true);
 xhr.send();
}
callServer();
