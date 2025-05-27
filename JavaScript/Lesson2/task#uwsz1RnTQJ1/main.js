
// Користувач вводить або має два числа.
//
// Потрібно знайти та вивести максимальне число з тих двох
//
// Також потрібно врахувати, коли введені рівні числа.

let  a = +prompt( "Enter a number" )
let b = +prompt( "Enter a number" )
if (a > b) {
    console.log(a);
} else if (b > a) {
        console.log(b);
    } else if (a === b) {
    console.log("===");

}
