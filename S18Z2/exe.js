let arrayOfNumbers = [1,2,3,5,6,1,3,2,4,5,6,8,12,13,14,42,56,89,1,4,3,5,6,7];
let currentRow = 1;
let longestRow = 0;
let firstIndex = 0;
let winnerIndex = 0;

for (let i=0; i<(arrayOfNumbers.length-1); i++) {
	if(arrayOfNumbers[i]<arrayOfNumbers[i+1]) {
		if(currentRow === 1) {
			firstIndex = i;
		}
		currentRow++;
	} else if (currentRow > longestRow) {
		longestRow = currentRow;
		winnerIndex = firstIndex;
		currentRow = 1;
	} else {
		currentRow = 1;
	}
}
console.log(arrayOfNumbers.slice(winnerIndex, (winnerIndex+longestRow)));