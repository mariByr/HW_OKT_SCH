
//– Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

let numberOfday = +prompt("What is the number of days?");
switch(numberOfday) {
    case 1:
        console.log('routine of monday');
        break;
    case 2:
        console.log('routine of tuesday');
        break;
    case 3:
        console.log('routine of wednesday');
        break;
    case 4:
        console.log('routine of thursday');
        break;
    case 5:
        console.log('routine of friday');
        break;
    case 6:
         console.log('routine of saturday');
         break;
    case 7:
        console.log('routine of sunday');
        break;
    default:
        console.log('mistake');
        break;
}
