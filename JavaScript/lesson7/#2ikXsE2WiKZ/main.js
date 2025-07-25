
//– Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

function User( id,name, surname, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}
const user= new User(1, 'Ivan', 'Franko', '038098954');
console.log(user)
let users = [
    new User(1, 'Ivan', 'Franko', '038098954'),
    new User(2, 'Ira', 'Fyra', '038094954'),
    new User(3, 'Oleg', 'Ysuk', '03809895719'),
    new User(4, 'Taras', 'Cilov', '03809495464'),
    new User(5, 'Ira', 'Byra', '0380989544547'),
    new User(6, 'Olia', 'Fyriv', '03809495480'),
    new User(7, 'Vira', 'Marino', '03809495435'),
    new User(8, 'Vira', 'Sadova', '03809495441'),
    new User(9, 'Serg', 'Feduna', '03809495467'),
    new User(10, 'Victor', 'Mnuh', '038094954'),
  ]
const filteredUsers = users.filter((user) =>
 user.id % 2===0 );
console.log(filteredUsers);
let updatedUsers = users.sort((user1, user2) => {user1.id - user2.id

})
