var nrProd = prompt('How many products?');
var arrayProducts = new Array(nrProd);
console.log(arrayProducts);
nrProd =parseInt(nrProd, 10);

for(var i = 0; i<nrProd; i++) {
	var ProdPrice = prompt('How much did prod cost?');
	var ProdQty = prompt('How many prod did tou buy?');
	arrayProducts[i] = {
		'ProdPrice': ProdPrice,
		'ProdQty': ProdQty
	}
}
console.log(arrayProducts);
var sum = 0;
for (var i=0; i<arrayProducts.length; i++) {
	sum += arrayProducts[i].ProdPrice * arrayProducts[i].ProdQty;
	console.log('enter the price of the item ' +(i+1)+ ': ' +arrayProducts[i].ProdPrice);
	console.log('enter the quantity of the item ' +(i+1)+ ': ' +arrayProducts[i].ProdQty);
}
console.log(sum);