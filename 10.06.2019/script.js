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

function renderSuperheroesList(dataFeed) {
	for (let i = 0; i < dataFeed.length; i++) {
		var markup = '<div class="row"><div class="col-sm-1">'+ dataFeed[i].id +'</div><div class="col-sm-11">'+ dataFeed[i].name +'<button class="btn btn-info btn-goTo" data-id="'+dataFeed[i].id+'">Go to superhero page</button></div></div>';
		document.getElementsByClassName('superheroes-list')[0].innerHTML += markup;
	}
	addEventListenerButtons();
}

renderSuperheroesList(data1.Characters);

function addEventListenerButtons() {
	const buttons = document.getElementsByClassName('btn-goTo');
	console.log(buttons);
	for ( let i=0; i<buttons.length; i++) {
		buttons[i].addEventListener('click', function(){
			window.location.href = 'singleHero.html'
		});
	}
}