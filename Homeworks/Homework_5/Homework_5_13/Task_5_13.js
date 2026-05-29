let array_currency=[{currency:`USD`,value:44},{currency:`EUR`,value:53}];
let sum = +prompt("Enter a Sum in UAH: ");
let currency_exchange=prompt("Enter an exchange currency (USD or EUR): ");
let exchange=(sum,array_currency,currency_exchange)=>(currency_exchange===array_currency[0].currency?sum/array_currency[0].value:(currency_exchange===array_currency[1].currency?sum/array_currency[1].value:"ERROR! Wrong CURRENCY!"));
if(sum>=0)
console.log(exchange(sum,array_currency,currency_exchange));
else
    console.log(`ERROR! Incorrect sum`);