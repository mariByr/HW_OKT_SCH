
//зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
// При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

const items= Array.from({length:100}, (_,i) => `Item ${i+1} `);
const pageSize= 10;
let currentPage=0;
function render () {
    const list = document.getElementById('list');
    list.innerText= '';
    const start = currentPage * pageSize;
    const end = start + pageSize;
    const pageItems =items.slice(start, end);
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
