function initGame() {
	window.location.reload();
}

function shuffleDeck(array) {
	let counter = array.length;
	for(let i = counter-1; i>0; i--) {
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

var cardCounter = 0;
var a= -1, b= -1;
var gameCards = document.getElementsByClassName('game-card');
gameCards = toArray(gameCards);
// gameCards = shuffleDeck(gameCards);
console.log(gameCards);

for (let i=0; i<gameCards.length; i++) {
	gameCards[i].addEventListener('click', function() {
		switch(i+1) {
			case 1:
			case 2:
				this.classList.add('pair-1');
				break;			
			case 3:
			case 4:
				this.classList.add('pair-2');
				break;			
			case 5:
			case 6:
				this.classList.add('pair-3');
				break;			
			case 7:
			case 8:
				this.classList.add('pair-4');
				break;
			case 9:
			case 10:
				this.classList.add('pair-5');
				break;			
			case 11:
			case 12:
				this.classList.add('pair-6');
				break;			
			case 13:
			case 14:
				this.classList.add('pair-7');
				break;			
			case 15:
			case 16:
				this.classList.add('pair-8');
				break;
		}
		if (a === -1) {
			a = gameCards[i];
		} else if (b === -1) {
			b = gameCards[i];
			if (a === b) {
			gameCards[i].classList.remove('pair-' +(i+1)/2 );
			gameCards[i].classList.add('winner-pair');
			} else {
				gameCards[i].classList.add('loser-pair');
			}
		} else {
			a = -1;
			b = -1;
			gameCards[i].classList.add('loser-pair');
		}
		console.log(a, b);






		// if (cardCounter === 2) {
		// 	if (gameCards[i].dataset.id === gameCards[i-1].dataset.id) {
		// 		gameCards[i].classList.remove('pair-' +(i+1)/2 );
		// 		gameCards[i].classList.add('winner-pair');
		// 	} else {
		// 		gameCards[i].classList.add('loser-pair');
		// 	}
		// 	console.log(gameCards[i-1]);
		// 	cardCounter = 0;
		// }
	});
}

console.log(gameCards);