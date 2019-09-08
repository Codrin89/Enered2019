var nrProduse = prompt('Cate produse?');
var arrayProduct = new Array(parseInt(nrProduse,10)); //transforma nr primit in baza 10 default : parseInt('2',10);
console.log(arrayProduct);
var a = 1;
for (var i = 0; i < parseInt(nrProduse); i++) {
	
		var prodPrice = prompt ('Enter the price of ' + a + ' item:');
		var prodQuantity = prompt('Enter the quantity of ' + a + ' item:');
		arrayProduct[i] = {
			'prodPrice' : prodPrice,
			'prodQuantity' : prodQuantity 
		}
		a=a+1;
}
// console.log(arrayProduct);
var sum = 0;
for (var i = 0; i<arrayProduct.length; i++){
	sum += arrayProduct[i].prodPrice * arrayProduct[i].prodQuantity;
	
}

console.log('Subtotal: ' + sum);
