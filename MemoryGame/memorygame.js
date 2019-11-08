function initGame() {
	window.location.reload();
}
var newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var shuffledArray = shuffleDeck(newArray);
console.log(shuffledArray);

function shuffleDeck(array) {
	let counter = array.length;
	for(let i = 0; i<counter; i++) {
		let index = Math.random()*counter;
		index = Math.floor(index);
		[array[i], array[index]] = [array[index], array[i]];
	}
	return array;
}

function toArray(x) {
	var a = [];
    for(var i = 0; i < x.length; i++)
        a.push(x[i]);
    return a;
}

function delay(milisecondDelay) {
   milisecondDelay += Date.now();
   while(Date.now() < milisecondDelay){}
}

// var cardCounter = 0;
// var a= -1, b= -1;
var firstClick = true;
var pairNumber = 1;
var gameCards = document.getElementsByClassName('game-card');
// gameCards = toArray(gameCards);
// gameCards = shuffleDeck(gameCards);
var newShuffledArray = [];

for(let i = 0; i < shuffledArray.length - 1; i = i + 2) {
	gameCards[shuffledArray[i]].classList.add('pair-' + pairNumber);
	gameCards[shuffledArray[i + 1]].classList.add('pair-' + pairNumber);
	newShuffledArray.push([shuffledArray[i], shuffledArray[i + 1]]);
	pairNumber++;
}

for (let i=0; i<gameCards.length; i++) {
	gameCards[i].addEventListener('click', function() {
		console.log(newShuffledArray);
		let getPosition = this.dataset.id;
		this.classList.add('active');
		if(firstClick) {
			firstClick = false;
		} else {
			// verify winning condition
			checkWinCondition();
			firstClick = true;
			setTimeout(() => {
				let activeElements = document.getElementsByClassName('active');
				// debugger;
				for(let i = 0; i < activeElements.length; i++) {
					activeElements[i].classList.remove('active');
				}
			}, 500);
		}		
	});
}
function checkWinCondition() {
	let getElementsActive = document.getElementsByClassName('active');
	var pair = [];
	// debugger;
	for(let i = 0; i < getElementsActive.length; i++) {
		pair.push(getElementsActive[i].dataset.id);
		
	}
	for (let i=0; i<pair.length; i++) {
		pair[i] = parseInt(pair[i]);
	}
	for(let i = 0; i < newShuffledArray.length; i++) {
		console.log(newShuffledArray[i]);
		console.log(pair);
		if (newShuffledArray[i] === pair) {
			alert('ok');
		}
	}
}