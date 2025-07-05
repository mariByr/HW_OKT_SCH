
//– створити функцію, яка повертає найменше число з масиву

let minNumber = (numbers)=>{
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number > min) {min = number;
        }
    }

    return min
}
