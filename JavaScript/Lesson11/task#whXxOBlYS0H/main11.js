
//– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини
 const cartsDiv = document.querySelector('#carts')
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
               for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');
         const divWithInfo = document.createElement('div');
         divWithInfo.innerText =`
             "total": ${cart.total},
      "discountedTotal": ${cart.discountedTotal},
      "userId":${cart.userId},
      "totalProducts": ${cart.totalProducts},
      "totalQuantity": ${cart.totalQuantity};`
            const ol=document.createElement("ol");
            for (const product of cart.products) {
                const li = document.createElement("li");
                const info = document.createElement("p");
                info.innerText =`${product.id},
          "title":${product.title}, 
          "quantity":${product.quantity}, ,
          "total":${product.total},
          "discountPercentage":${product.discountPercentage}, ,
          "discountedTotal":${product.discountedTotal}, 
          `
                const img = document.createElement("img");
                img.src=product.thumbnail;
                li.append(img,info)
                 ol.appendChild( li)
            }
div.append(divWithInfo,ol);
cartsDiv.append(div);
        }

        })
