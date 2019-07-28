var lungime = prompt('What is the length of the room in feet');
var latime = prompt('What is the width of the room in feet');

console.log('You entered dimensions of ' +lungime+ ' feet by ' +latime+ ' feet')

var ConversionFactor = 0.09290304;
var FeetSurface = lungime*latime;
var MetersSurface = FeetSurface * ConversionFactor ;

console.log('The area is ');
console.log( FeetSurface+ ' square feet');
console.log( MetersSurface+ ' square meters');
