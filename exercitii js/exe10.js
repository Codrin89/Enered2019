document.addEventListener('keydown', function(event) {
	console.log(event.keyCode);
	const valueToTransform = document.querySelector('input[type="number"]').value;
	let result = 0
	if(event.keyCode === 67) {
		// handle Celsius transformation => result in Celsius
		result = (valueToTransform - 32) * (5 / 9);
	}
	if(event.keyCode === 70) {
		// handle Fahrenheit transformation => result in Fahrenheit
		result = (valueToTransform * (9 / 5)) + 32;
	}
	console.log(result);
});