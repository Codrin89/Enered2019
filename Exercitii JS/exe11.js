// How many euros are you exchanging? 81
// What is the exchange rate? 137.51
// 81 euros at an exchange rate of 137.51 is
// 111.38 U.S. dollars.

let EuroAmmount = parseInt(prompt('How many euros are you exchanging? '));
let ExchangeRate = parseFloat(prompt('What is the exchange rate? '));
let DollarsAmmount = EuroAmmount*ExchangeRate/100;
console.log(EuroAmmount+ ' euros at an exhange rate of ' +ExchangeRate+ ' is ' +(DollarsAmmount.toFixed(2))+ ' U.S. dollars.');