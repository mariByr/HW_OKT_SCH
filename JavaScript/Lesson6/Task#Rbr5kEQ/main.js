
// Є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомоги map перетворити всі об’єкти в масиві на стрінгові.

let numbers =[10,8,-7,55,987,-1011,0,1050,0];
let strings = numbers.map(number => {
    return number + '';});
console.log(strings);
