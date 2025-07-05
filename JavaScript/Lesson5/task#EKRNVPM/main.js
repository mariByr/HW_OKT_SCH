
//– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum =arr => {
  let basket = 1;
    for (const arrElement of arr) {
        basket = basket + arrElement;
    }
    return basket;
}
