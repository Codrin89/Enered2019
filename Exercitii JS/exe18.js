document.addEventListener('keydown', function(event){
	const valueToTransform = document.querySelector('input[type="number"]').value;
	let result = 0;
	if (event.keyCode === 67) {
//Fahrenheit to Celsius transformation
		result = (valueToTransform-32)*5/9;
	}
	if (event.keyCode === 70) {
//Celsius to Fahrenheit transformation
		result = (valueToTransform*9/5)+32;
	}
	console.log(result);
});