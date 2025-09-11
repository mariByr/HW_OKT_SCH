
//*** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
//        2 ключі витягували дані з тих ключів ставили умову і робили дію.умова була часовий проміжок
let now =  new Date().getTime();
let price = +localStorage.getItem("priceKey") || 100;
const last = +localStorage.getItem("timeKey") || 0;
const tenSecond = 10_000;
if (now -last>=tenSecond) {
    price += 10;

    localStorage.setItem('priceKey', JSON.stringify(price));
    localStorage.setItem('timeKey', JSON.stringify(now));}
    document.getElementById("price").innerText = price;
