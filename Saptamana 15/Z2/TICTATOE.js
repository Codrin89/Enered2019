var turn = false;
var winningCombo = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
];
function initGame() {
	

}

var gameTiles = document.getElementsByClassName('game-tile');
for(let i=0; i<gameTiles.length;i++) {
	gameTiles[i].addEventListener('click',function() {
     if(this.getAttribute('data-dirty')) {
     	return;
     }		
		if(turn) {
			this.classList.add('added-0');
		} else {
			this.classList.add('added-X');
		}
		this.setAttribute('data-dirty', 'true');
		checkWinner();
		turn = !turn;
	});
}