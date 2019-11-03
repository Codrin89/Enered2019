let myDeck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function initGame() {
	window.location.reload();
}

function shuffleDeck(array) {
	let counter = array.length;
	for(let i=0; i<counter; i++) {
		let index = Math.random()*counter;
		index -= Math.floor(index);
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}
	return array;
}

var gameCards = document.getElementsByClassName('game-card');
console.log(gameCards);
shuffleDeck(gameCards);
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