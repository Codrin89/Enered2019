var turn = false;
var winningCombo = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 5, 9],
	[3, 5, 7],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9]
];
var initGame = function() {
	window.location.reload();
}

var gameTiles = document.getElementsByClassName('game-tile');
for(let i = 0; i < gameTiles.length; i++) {
	gameTiles[i].addEventListener('click', function() {
		if(this.getAttribute('data-dirty')) {
			return;
		}
		// addClass 0 or X to tile
		if(turn) {
			this.classList.add('added-0');
		} else {
			this.classList.add('added-X');
		}
		this.setAttribute('data-dirty', 'true');
		checkWinner(turn);
		turn = !turn;
	});
}


function checkWinner(flag) {

	var statusFromIf;
	if(flag) {
		statusFromIf = '0';
	} else {
		statusFromIf = 'X';
	}

	var gameTilesToBeChecked = document.getElementsByClassName('added-' + statusFromIf);
	var gameIds = [];
	for(let i = 0; i < gameTilesToBeChecked.length; i++) {
		gameIds.push(gameTilesToBeChecked[i].dataset.id);
	}

	for(let k = 0; k < winningCombo.length; k++) {
		if(gameIds.toString().indexOf(winningCombo[k][0]) > -1 && gameIds.toString().indexOf(winningCombo[k][1]) > -1 && gameIds.toString().indexOf(winningCombo[k][2]) > -1) {
			alert('Winning combo :'+ winningCombo[k].toString());
		}
	}

}

document.getElementById('reset-button').addEventListener('click', function() {
	initGame();
});









