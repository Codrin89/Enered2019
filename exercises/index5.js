var x=prompt('How many people');
var y=prompt('how many pizzas do you have?');


let slicesTotal = y * 8;
let slicesExtra = slicesTotal % x;
let slicesPerperspn = (slicesTotal - slicesExtra)/ x;
console.log(slicesTotal);
console.log(slicesExtra);
console.log(slicesPerperspn);

var output = x+' people with '+y+' pizzas';
console.log(output);
var output2= 'Each person gets '+slicesPerperspn+' pieces of pizza';
console.log(output2);
var output3= 'There are '+slicesExtra+' leftover pieces';
console.log(output3);