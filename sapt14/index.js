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
function initGame() {
   window.location.reload();
}

var gameTitles = document.getElementsByClassName('game-title');
for(let i = 0; i <gameTitles.length; i++) {
	gameTitles[i].addEventListener('click', function() {
		if(this.getAttribute('data-dirty')) {
			return;
		}
		// do click
		//addClass 0 or X to tile
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
    var statusFromIf
    if(flag) {
    	statusFromIf = '0';
    } else {
    	statusFromIf = 'X';
    }

    var gameTitlesToBeChecked = document.getElementsByClassName('added-' + statusFromIf);
    console.log(gameTitlesToBeChecked);
    var gameIds = [];
    for(let i = 0; i < gameTitlesToBeChecked.length; i++) {
    	gameIds.push(gameTitlesToBeChecked[i].dataset.id);
    }
    console.log(gameIds);

    for(let k = 0; k < winningCombo.length; k++) {
    	console.log(winningCombo[k]);
    	if( gameIds.toString().indexOf(winningCombo[k][0]) > -1 &&
    	gameIds.toString().indexOf(winningCombo[k][1]) > -1 &&
    	gameIds.toString().indexOf(winningCombo[k][2]) > -1) {
    		alert('Winning combo :' + winningCombo[k].toString());
    	}
    	//for (let j = 0; j < winningCombo[k].length; j++) {
            // console.log(winningCombo[k][j]);   
    	//}
    }

}

document.getElementById('button-reset').addEventListener('click', function() {
	initGame();
});

