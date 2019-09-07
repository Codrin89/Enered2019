//Mathematical op
const a = 10;
const b = 12;
const c = '20';

console.log(a + b);
console.log(b + c);

console.log(a -b);
console.log(a / b);
console.log(a *b);
console.log(a % b);

//Assign op
const x = 100;
console.log(x);

let d = 22
d += 20;
console.log(d);

const string1 = 'hello';
const string2 = ' world';
const strin3 = '!!!';
const stringConcat = string1 + string2 +strin3;

console.log(stringConcat);

console.log(string1 == string2);
console.log(12 == '12');
console.log(12 == 12);
console.log(12 === '12');
console.log(12 ===12);

console.log(12 != '12');
console.log(12 !== '12');

//Logical Op
const boolean1 = true;
const boolean2 = true;
const boolean3 = true;
console.log(!boolean1);

console.log(boolean1 && boolean2);
console.log(boolean1 && boolean3);

console.log( boolean1 || boolean2);

//CONSTRUCTS
if(10 === 12) {
	console.log('condition is true');
	//code to be executed if condition is true
} else {
	console.log('condition is false');
	//code to be executed if condition is false
}

let i = 10;
while(i > 0) {
	//code to be repeted and executed while the codition is true
	console.log(i);
	i--;
}
// for(var i = 0; i < length ; i++) {
//    //code to be executed until i ( the index ) reaches false in the second     part of the FOR statement ( condition for break for loop )
// }
const stringSwitch = 'something';
switch('something') {
  case 'something else':
    // code block
    break;
  case 'something':
  console.log('something');
    // code block
    break;
  default:
    // code block
	console.log('someeeethinggg');
}
//Function: 
let parameter1 = 20;
let parameter2 = 30;
let parameter3= 80;
function add(parameter1, parameter2, parameter3) {
	console.log(parameter1 + parameter2 + parameter3);
   // code to be executed
}
// call of the function
add     (parameter1, parameter2, parameter3);