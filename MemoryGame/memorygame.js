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

var firstClick = true;
var pairNumber = 1;
var gameCards = document.getElementsByClassName('game-card');
console.log("Game cards: ", gameCards);
var newShuffledArray = [];
console.log("Shuffled array: ", shuffledArray);

for(let i = 0; i < shuffledArray.length; i = i + 2) {
	gameCards[shuffledArray[i]].classList.add('pair-' + pairNumber);
	gameCards[shuffledArray[i + 1]].classList.add('pair-' + pairNumber);
	newShuffledArray.push([shuffledArray[i], shuffledArray[i + 1]]);
	pairNumber++;
}
console.log("New shuffled array: ", newShuffledArray);

for (let i=0; i<gameCards.length; i++) {
	gameCards[i].addEventListener('click', function() {
//		console.log(newShuffledArray);
		// let getPosition = this.dataset.id;
		this.classList.add('active');
		if(firstClick) {
			firstClick = false;
		} else {
			// verify winning condition
		    checkWinCondition();
			firstClick = true;
			setTimeout(() => {
				let activeElements = document.getElementsByClassName('active');
				for(let i = 0; i < activeElements.length; i++) {
					activeElements[i].classList.remove('active');
				}
			}, 500);
		}
	});
}
function checkWinCondition() {
	let getElementsActive = document.getElementsByClassName('active');
	getElementsActive = toArray(getElementsActive);
	console.log(getElementsActive);
	var pair = [];
	for(let i = 0; i < getElementsActive.length; i++) {
		pair.push(getElementsActive[i].dataset.id);	
		pair[i] = parseInt(pair[i]);
		pair[i] = pair[i];
		console.log("Pair:", pair);	
	}
	for(let i = 0; i < newShuffledArray.length; i++) {
		if (newShuffledArray[i] === pair) {
			alert('ok');
		}
	}
}