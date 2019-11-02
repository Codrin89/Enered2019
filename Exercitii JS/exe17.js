let yourWeight = prompt('Enter your weight: ');
let yourGender = prompt('Enter your gender: ');
let alcoholAmount = prompt('Enter the amount of alcohol: ');
let timeSinceLastDrink = prompt('Enter time since last drink: ');

function calculateBAC(weight, gender, amount, time) {
	if (gender === 'f') {
		var BAC = (amount*5.14/weight*0.66)-.015*time;

	} else if (gender === 'm') {
		var BAC = (amount*5.14/weight*0.73)-.015*time;
	}
	return BAC;
}

function tellMe() {
	var BAC = calculateBAC(yourWeight, yourGender, alcoholAmount, timeSinceLastDrink);
	BAC = BAC.toFixed(2);
	if (BAC<0.08) {
		document.getElementById('BACValue').innerHTML = 'Your BAC is ' +BAC+ '.<br>It is legal for you to drive.';	
	} else {
		document.getElementById('BACValue').innerHTML = 'Your BAC is ' +BAC+ '.<br>It is not legal for you to drive.';
	}
}
tellMe();



