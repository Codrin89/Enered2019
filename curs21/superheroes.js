



function superheroesList(dataFeed){
      
    for (let i = 0; i < dataFeed.length; i++) {
      var markup = '<div class="row"><div class="column">'+dataFeed[i].id+'</div><div class="column">'
      +dataFeed[i].name+'</div><button class="btn btn-goTo" data-id = "'
      + dataFeed[i].id + '">Go to superhero page!</button></div>';
       document.getElementsByClassName('superheroes-list')[0].innerHTML += markup;
    }
    addEventListenerButtons();

    }
    

// superheroesList(data1.Characters);


function addEventListenerButtons() {
  const buttons = document.getElementsByClassName('btn-goTo');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
      console.log(this.dataset.id);
      window.location.href = 'heroPage.html?id=' + this.dataset.id;
    });
  }
  // console.log(buttons);
}


function callServer(){
  var xhr = new XMLHttpRequest();
  const url = 'https://private-anon-5844864436-superheroes.apiary-mock.com/characters/';
  xhr.onreadystatechange = function(response){
    console.log(response.currentTarget.readyState);
    if (response.currentTarget.readyState === 4) {
      var result = JSON.parse(response.currentTarget.responseText);
      superheroesList(result.Characters);
    }
  }

  xhr.open('GET',url, true);
  xhr.send();
}
callServer();