
//– Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
const exchange =(sumUAH,currencyValues,exchangeCurrency) => {
    let currentExchangeResult = 0
    let isExchangePossible = false;
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {  currentExchangeResult
            = sumUAH / currency.value
            isExchangePossible = true;
            break;
        }
    }
    if (!isExchangePossible) {
        console.log('Обмін даної валюти не здійснюється');
        return null;
    }
if (!currentExchangeResult ||Number.isNaN(currentExchangeResult)){
    console.log('Під час обміну відбулась помилка');
    return
}


    return currentExchangeResult;
}




exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'PLN')
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'CNY')

// exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR')
