
//– створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

const divElem = document.createElement('div')
divElem.classList.add('wrap', 'collapse', 'alpha', 'beta',);
divElem.innerText ='Hello';
document.body.append(divElem);
const cloneNode = divElem.cloneNode(true);
document.body.append(cloneNode);
