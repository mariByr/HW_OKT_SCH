// #sA3Gg1sCp

// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
let book_1 = {
    title: "C",
    pageCount : 200,
    genre: "fiction",
    authors: [
        {
            name: "A",
            age: 90
        },
        {
            name: "B",
            age: 90
        }
    ]
};
let book_2 = {
    title:"B",
    pageCount: 200,
    genre: "fiction",
    authors: [
        {
            name: "GHHJ",
            age: 70
        },
        {
            name: "Hmw",
            age: 50
        }
    ]
};
let book_3 = { title:"werty",
    pageCount: 200,
    genre: "fiction",
    authors: [
        {
            name: "GHHJ",
            age: 45
        },
        {
            name: "Hmw",
            age: 38
        }
    ]
};
//#jCHFnEbdmFd
//
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: "A", username: "Max", password: "123wer"},
    {name: "B", username: "Nata", password: "53wtrr"},
    {name: "C", username: "Ivan", password: "123weeer"},
    {name: "D", username: "Lia", password: "13w45er"},
    {name: "E", username: "Vik", password: "123wera"},
    {name: "F", username: "Myx",password: "7563ry"},
    {name: "S", username: "Serg",password: "4563wir"},
    {name: "H", username: "Mila",password: "123wtyr"},
    {name: "Zak", username: "Ann",password: "123werdf"},
    {name: "Lina", username: "LI",password: "1236754gf"}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//#coYydZuaeEB
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temperatyre = [
    { day: "first", morning_temperatyre: 15, day_temperatyre: 25, night_temperatyre: 17},
    {day: "second", morning_temperatyre: 18, day_temperatyre: 26, night_temperatyre: 20},
    {day: "third", morning_temperatyre: 18, day_temperatyre: 28, night_temperatyre: 20},
    {day: "fourth", morning_temperatyre: 18, day_temperatyre: 30, night_temperatyre: 20},
    {day: "fifth", morning_temperatyre: 16, day_tewmperatyre: 22, night_temperatyre: 15},
    {day: "sixth", morning_temperature: 18, day_temperature: 28, night_temperatyre:17},
    {day: "seventh", morning_temperature: 20, day_temperature: 25, night_temperatyre:16}
]
console.log(temperatyre);
