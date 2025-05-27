
//– У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt("enter number 1-31");
if(day>0 && day <= 10){
    console.log("1 decada")}
else if(day>10 && day <= 20){
    console.log("2 decada")
}
else if(day>20 && day <=31){
    console.log("3 decada")
}
