//foreach
 let users = [
    {name: 'vasya', age: 17, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 16, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 20, status: true}
];
//forEach
// let adults=[];
// users.forEach(user => {
//     if (user.age > 20) {
//         adults.push(user);
//     }
// })
// console.log(adults);
//filter
let filtered = users.filter(user =>user.status)
console.log(filtered)
