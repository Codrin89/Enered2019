//mathematical operators
const a = 10;
const b = 12;
const c = '20';
console.log(a + b);
console.log(b + c);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

const x = b;
console.log(x);

let d = 22;
d += 20;
console.log(d);

const string1 = 'hello';
const string2 = ' world';
const string3 = '!!!';
const stringConcat = string1 + string2 + string3;
console.log(stringConcat);
console.log(string1 == string2);
console.log(12 == '12');
console.log(12 == 12);
console.log(12 === '12');
console.log(12 === 12);
console.log(12 != '12');
 
const boolean1 = true;
const boolean2 = true;
const boolean3 = false;
console.log(boolean1 && boolean2);
console.log(boolean1 && boolean3);
console.log(boolean1 || boolean3);

if (10 === 10) {
	console.log('condition is true');
} else {
	console.log('condition is false');
}

let i = 10;
// while (i > 0) {
// 	console.log(i);
// 	i--;
// }

// for (var i = 0; i<length; i++) {

// }
const stringSwitch = 'something'
switch(stringSwitch) {
	case 'something else':
		console.log('something else');
		break;
	case 'something':
		console.log('something');
		break;

	default:
		console.log('altceva');
}

let parameter1 = 20, parameter2 = 30, parameter3 = 80;
function add(parameter1, parameter2, parameter3) {
	console.log(parameter1 + parameter2 + parameter3);
}
add(parameter1, parameter2, parameter3);

function MA(array) {
	let sum = 0;
	for (let i=0; i<array.length; i++) {
		sum += array[i];
	}
	return sum/array.length;

}
const resultMA = MA([10, 12, 15]);
console.log(resultMA);