function rendersuperheroesList(dataFeed) {

  for(let i = 0; i < dataFeed.length ; i++) {
    console.log(dataFeed[i]);
      var markup = '<div class="row"><div class="column">' +dataFeed[i].id+ '</div><div class="column">' +dataFeed[i].name+ '</div><button class="btn btn-goTo" data-id="'+dataFeed[i].id+'">Go to superhero page</button></div>';
      document.getElementsByClassName('superheroes-list')[0].innerHTML += markup;


  }
  addEventListenerButtons();
}

//rendersuperheroesList(data1.Characters);

function addEventListenerButtons() {
  const buttons  = document.getElementsByClassName('btn-goTo');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
      console.log(this.dataset.id);
      window.location.href = 'index2.html?id=' + this.dataset.id;
    });
  }
}

function callServer() {
  var xhr = new XMLHttpRequest();
  const url = 'http://private-anon-f2ac8328c0-superheroes.apiary-mock.com/characters/'
 xhr.onreadystatechange = function(response) {
    console.log(response.currentTarget.readyState);
    if(response.currentTarget.readyState === 4 ){
      var result = JSON.parse(response.currentTarget.responseText);
      rendersuperheroesList(result.Characters);
    }
  }
  xhr.open("get", url, true);
  xhr.send();
}
callServer();