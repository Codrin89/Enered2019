alert();
var z = '10';
console.log(z-1);
console.log('this is z:',z-1);
console.log('this is z modulo 3', z%3);
console.log('this is z divided by 3', z/3);
console.log('this is z+1', z+1);

var x  = 'hello ';
var y = 'world!';
console.log(x+y);

var nr1  = 10;
var nr2 = 20;
console.log(nr1+nr2);
console.log(nr1>nr2);

var age = 16;
console.log('person is major: ', age >= 18);
console.log('person is something' > 18 ); //always false; nothing to compare to
console.log('10' < 18);

var string = 'this is a string';
console.log(string.length);
var number = 12;
console.log(number.length);
var bool = true;
console.log(bool.length);
var array = [10, 20, 40, 50, 47, 43];
console.log(array.length);
var object = {
	value1:2323,
	value2: 3434
}
console.log(object.length);
var nestedObject = {
	object1: {
		value1: 234234,
		value2: {
			value21: 343434,
			value22: {
				value221: 343,
				value222: 'something',
			}
		}
	}
}
console.log(nestedObject);

var nrr1 = 10;
var nrr2 = 20;
nrr1 = nrr1 + nrr2;
nrr2 += nrr1;
console.log(nrr1);
console.log(nrr2);