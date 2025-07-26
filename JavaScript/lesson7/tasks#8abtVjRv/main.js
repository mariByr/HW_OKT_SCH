
//#nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
function Client(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
// function Product(title, price){
// this.title = title;
// this.price = price;

let clients = [
    new Client(1, 'Fedir', 'Kyliv', 'fed@gmail.com',380976554294,
        [{title:'tv',price:14000},{title:'phone',price:4000}]),
    new Client(2, 'Max', 'Lemberg','lemb@ gmail.com',380976543294,[{title:'kettle',price:1000},{title:'phone',price:16000}]),
    new Client(3,'Olia', 'Kvitka', 'kv@gmail.com',380966543294, [{title:'grill', price:2000},{title:'kettle', price:800}]),
    new Client(4, 'Lev', 'Ser','lev@gmail.com',380986543294,[{title:'phone',price:2800}]),
    new Client(5, 'Andriana', 'Mraka', 'engi@gmail.com',380966583294,[{title:'vacum cleaner', price:8000}]),
    new Client(6, 'Lev', 'Koval','lev77@gmail.com',3809865432965,[{title:'hair drayer', price:2000},{title:'meat grinder', price:2000},{title:'pen',price:300}]),
    new Client(7, 'Liza', 'Chernova','lz234@gmail.com',380987843294,[{title:'phone',price:7000,}]),
    new Client(8, 'Lera', 'Serimova','lera@gmail.com',380986543290,[{title:'iron',price:800},] ),
    new Client(9, 'Ben', 'Makalister','mak@gmail.com',380986543280,[] )]
    // new Client(10,'Maria', 'Byra', 'mari@gmail.com',3809765543294,[{title:'grill',price:2000},
    //     {title:'kettle',price:800}])}


//#8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
const sort=clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);
