document.addEventListener('keydown', function(){
	const valueToTransform = document.querySelector('input[type="number"]').value;
	let result = 0;
	if(event.keyCode == '67'){
		console.log('You pressed C');
		result = (valueToTransform - 32) * (5 / 9);
	}if(event.keyCode == '70'){
		console.log('You pressed F');
		result = (valueToTransform * (9 / 5)) + 32;
	}
	console.log(result);
});