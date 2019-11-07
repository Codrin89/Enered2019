var turn = false;
var winningCombo = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,5,9],
	[3,5,7],
	[1,4,7],
	[2,5,8],
	[3,6,9]
];

function initGame() {
	window.location.reload();
}

var gameTiles = document.getElementsByClassName('game-tile');
for(let i=0; i<gameTiles.length; i++) {
	gameTiles[i].addEventListener('click', function(){
		if(this.getAttribute('data-dirty')) {
			return;
		}
		//do click
		if(turn) {
			this.classList.add('added-0');
		} else {
			this.classList.add('added-X');
		}
		this.setAttribute('data-dirty', 'true');
		checkWinner(turn);
		turn = !turn;
	})
}

function checkWinner(flag) {
	var statusFromIF = flag ? '0' : 'X';
	var gameTilesToBeChecked = document.getElementsByClassName('added-' + statusFromIF);

	var gameIds = [];
	for(let i=0; i<gameTilesToBeChecked.length; i++) {
		gameIds.push(gameTilesToBeChecked[i].dataset.id);
	}
	console.log(gameIds);


	for (let k=0; k<winningCombo.length; k++) {
		console.log(winningCombo[k]);
		if(gameIds.toString().indexOf(winningCombo[k][0]) > -1 && gameIds.toString().indexOf(winningCombo[k][1]) > -1 && gameIds.toString().indexOf(winningCombo[k][2]) > -1) {
			alert('Winning combo ' + winningCombo[k].toString());
		}
	}
}

document.getElementById('btn-reset').addEventListener('click', () => initGame());