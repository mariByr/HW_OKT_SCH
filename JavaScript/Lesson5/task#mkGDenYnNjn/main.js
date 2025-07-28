
//– Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
let exchange =(sumUAH,currencyValues,exchangeCurrency) => {
    let found = false;
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            console.log(sumUAH / currency.value)
            found = true;
        }
    }
    if (!found) {
        console.log('Обмін даної валюти не здійснюється')
    }
}




exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'PLN')
// exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR')
