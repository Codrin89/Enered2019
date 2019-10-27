function protect_email(person){
	var splitedText = person.split('@'); //'robin_singh', 'example.com'
	splitedText[0] = splitedText[0].slice(0,Math.floor(splitedText[0].length/2))+ '...';
	return splitedText.join('@');
}
console.log(protect_email('robin_singh@example.com'));