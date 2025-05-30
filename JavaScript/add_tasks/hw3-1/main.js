
//– Дано 2 масиви з рівною кількістю об’єктів.
//
// Масиви:
//З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id”.
//
// Записати цей об’єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},

    {id: 2, name: 'petya', age: 30, status: true},

    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},

    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},

    {user_id: 2, country: 'Poland', city: 'Krakow'},

    {user_id: 4, country: 'USA', city: 'Miami'}
];
const usersWithIdcities  = []
for (const user of usersWithId) {
    const userCopy = {...user,location:[]};
    let id = user.id;
    for (const location of  citiesWithId) {
        let user_id = location.user_id;
        if(id === user_id) {
            userCopy.location.push(location);
        }
}
    usersWithIdcities.push(userCopy);
}
console.log(usersWithIdcities);
