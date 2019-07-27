alert();
var z = '10';
console.log('this is z:',z - 1);
console.log('this is z modulo3:', z % 3);
console.log('this is z devided by 3', z / 3);
console.log('this is z + 1:', z + 1);
var y='hello ';
var w="world";
console.log(y + w);
var nr1 = 10;
var nr2 = 20;
console.log(nr1 + nr2);
console.log(nr1 > nr2);
var age = 16;
console.log('person is major:', age > 18);
console.log('person is something' < 18);
console.log('10' < 18);


var string = 'something is here';
console.log(string.length);
var number = 20;
console.log(number.length);
var bool = true;
console.log(bool.length);
var array = [10, 20, 40, 60, 123, 32];
console.log(array.length);
var object = {
	value1: 1232,
	value2: 2312
}
console.log(object.length);
var nestedObject = {
	object1: {
		value1: '12321',
		value2: {
			value11: 12321,
			value12: {
				valuea111: 12312,
				value112: 'something'
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