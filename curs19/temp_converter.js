document.addEventListener('keydown', function(event){
	// console.log(event.keyCode);
	const valueToTransform = document.querySelector('input[type="number"]').value;
	let result = 0;
	if(event.keyCode === 67){
		//handle celsius transformation => result in Celsius
		result = (valueToTransform - 32) * (5 / 9);
		console.log("your celsius temperature is " + result);
	}
	if(event.keyCode === 70){
		//handle fahrenheit => result in Fahrenheit
		result = (valueToTransform * (9 / 5)) + 32;
		console.log("your fahrenheit temperature is " + result);
	}
	
});