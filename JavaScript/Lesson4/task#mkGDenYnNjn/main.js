
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    if (exchangeCurrency === 'USD') {
        resultUsd = sumUAH / currencyValues[0].value;
        console.log(resultUsd);
    } else if (exchangeCurrency === 'EUR') {
        resultEuro= sumUAH / currencyValues[1].value;
        console.log(resultEuro);
    } else {
        console.log('unknown exchange type');
    }
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD');
