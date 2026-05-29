function exchange(sumUAH,currencyValues,exchangeCurrency)
{
    if(exchangeCurrency===currencyValues[0].currency)
        return sumUAH/currencyValues[0].value;
    else if(exchangeCurrency===currencyValues[1].currency)
        return sumUAH/currencyValues[1].value;
    else
        return "ERROR! Wrong CURRENCY!"
}
let array_currency=[{currency:`USD`,value:44},{currency:`EUR`,value:53}];
let sum = +prompt("Enter a Sum in UAH: ");
let currency_exchange=prompt("Enter an exchange currency (USD or EUR): ");
console.log(exchange(sum,array_currency,currency_exchange));