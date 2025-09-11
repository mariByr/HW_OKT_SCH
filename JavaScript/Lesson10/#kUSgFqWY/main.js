
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const tableGeneratorFrom =document.forms['tableGeneratorFrom'];
const table= document.getElementById('table');
tableGeneratorFrom.onsubmit = (e) => {   //
    table.innerText =''; // вичищаємо попередні дані
    e.preventDefault();  // щоб сторінка не перезагружалась
     let rowsValue = +tableGeneratorFrom.numberOfRows.value;//зчитування даних з форми
    let cellsValue = +tableGeneratorFrom.cells.value;
    const dataValue = tableGeneratorFrom.data.value;
    console.log(rowsValue, cellsValue, dataValue);
    for (let i = 0; i < rowsValue; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement("td");
            td.innerText =dataValue;
            tr.appendChild(td);

        }
         table.appendChild(tr);



    }

}
