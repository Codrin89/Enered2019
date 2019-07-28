var nrProd = prompt ('How many products?');
nrProd = parseInt(nrProd,10);
var arrayProducts = new Array(nrProd);

for(var i = 0; i < nrProd; i++) {
	var prodPrice = prompt('How much did prod cost?');
	var prodQty = prompt('How many prod did you buy?');
	arrayProducts[i] = {
		'prodPrice': prodPrice,
		'prodQty': prodQty
	}
}
console.log(arrayProducts);

var sum = 0;
for(var i = 0; i< arrayProducts.length; i++) {
	sum += arrayProducts[i].prodPrice * arrayProducts[i].prodQty;
}
console.log(sum);