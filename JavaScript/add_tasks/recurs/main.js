// створити рекурсію що поверне суму всіх чисел в обєкті

const data = {
    a:5,
    b:{y:3},
    c:[4,7,9,1],
};
function sumAll(obj){
    //base case,створюємо початкову змінну і запускаєм цикл щоб проітерувати яке в нас
    let totalSum = 0;
    for ( const key in obj) {
        const value = obj[key];
        if (typeof value === 'number') {console.log('number', value); totalSum += value;
       //якщо значення ключа число додає відразу

        }
     else if( Array.isArray(value)) {
            for (const item of value) {
                if(typeof item==='number')totalSum += item;
               else totalSum += sumAll(item);
            }}
            //якщо значення ключа масив то він є аргументом він ітерується і totalSum=попередня+результат виконання нового виклику

  else if(typeof value === 'object' && value !== null) {
      //якщо значення обєкт то  аргумент просто називаємо value f рекурсія вже перевірить що всередині того value  залежно від типу викликатиме себе поки value не буде числом
            console.log('object', value);
            totalSum += sumAll(value);

}}
return totalSum;}
console.log(sumAll(data));
