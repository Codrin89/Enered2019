let myDeck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(myDeck);
function initGame() {
	window.location.reload();
}

function shuffleDeck(array) {
	let counter = array.length;
	for(let i = counter-1; i>0; i--) {
		let index = Math.random()*(counter+1);
		index = Math.floor(index);
		[array[i], array[index]] = [array[index], array[i]];
	}
	return array;
}
myDeck = shuffleDeck(myDeck);

var gameCards = document.getElementsByClassName('game-card');
console.log(gameCards);
console.log(myDeck);

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
	});
}

console.log(gameCards);