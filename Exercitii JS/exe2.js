// var z = prompt('What is the input?');
// console.log(z);


// var output = 'What is the input?' +z+ '\n' +z+ ' has ' +z.length+ 'characters';
// console.log(output);

var z = prompt('What is the input?');

while (z.length == 0) {
	z = prompt('You must enter input'); 
}

console.log('What is the input? ' +z+ '\n' +z+ ' has ' +z.length+ ' characters.');