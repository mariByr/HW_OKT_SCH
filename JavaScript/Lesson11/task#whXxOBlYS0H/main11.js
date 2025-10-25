
//– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини
 const cartsDiv = document.querySelector('#carts')
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);
        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');
            div.innerText = `${cart.id} ${cart.total} ${cart.discountedTotal}`
cartsDiv.append(div);
        }
//"total": 103774.85,
//       "discountedTotal": 89686.65,
//       "userId": 33,
//       "totalProducts": 4,
//       "totalQuantity": 15
//     },
        })
