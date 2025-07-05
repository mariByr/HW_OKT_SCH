
//– створити функцію, яка приймає масив об’єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об’єкту окремий блок.

let foobar= (users) => {
    for (user of users) {
        document.write(`<div> ${user.id} ${user.name} ${user.age}</div>`)
    }
}
foobar([{id:1, name:'Oleg', age:25},
    {id:2, name:'Olia', age:28},
    {id:3, name:'Vita', age:43}
])
