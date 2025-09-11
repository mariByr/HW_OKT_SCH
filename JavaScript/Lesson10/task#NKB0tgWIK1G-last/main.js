
//зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
// При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

  const items= Array.from({length:100}, (_,i) => `Item ${i+1} `); //cтворення масиву
const pageSize= 10;  //   змінна яка показує скільки обєктів буде виводитись при рендиренгу
let currentPage=0;   //початкова сторінка
function render () {      //частина коду яка буде виконувватись в при будь-якому натиску в вигляді функціїфункція яка буде виконуватись при натисканні всюди однакова
    const list = document.getElementById('list');
    list.innerText= '';
    const start = currentPage * pageSize;//показує з якого індексу буде вирізати
    const end = start + pageSize;//по який не включно
    const pageItems =items.slice(start, end);//за допомогою слайсу робимо масив який будем виводити потім при натиску кнопки
    pageItems.forEach((item) => {let div = document.createElement('div');
    div.classList.add('item');
    div.innerText = item;
    list.appendChild(div);
    })
}
document.getElementById('prev').onclick =
    function () {
        if (currentPage > 0) {
            currentPage--;
            render();
        }
    }
    document.getElementById('next').onclick =function () {
    if (currentPage < items.length/ pageSize-1) {
    currentPage++;
    render()
        }

    }
    render();
