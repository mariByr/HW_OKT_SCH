
//– Є масив:
//
// [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const ul = document.createElement('ul')
arrInfo = ['Main','Products','About us','Contactcts'];
for (const  item of arrInfo) {
    const li = document.createElement('li');
li.innerText = item;
ul.appendChild(li);
}
document.body.appendChild(ul);
