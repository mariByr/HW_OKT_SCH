
//– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let foo = (text, counter, ) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);

    }

    document.write(`</ul>`);
}
foo('dream', 15);
