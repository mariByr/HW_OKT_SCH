// – взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
const divWrapper = document.getElementById('wrapper');
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {console.log(recipesObject);
    const {recipes} = recipesObject;
    console.log(recipes);
    for (const recipe of recipes){
        const recipDiv = document.createElement('div');
        recipDiv.classList.add('recipe');
        const divIdName=document.createElement('div');
        divIdName.innerText = `"id":${recipe.id}, 
        "name":${recipe.name}`;
        const infoDiv = document.createElement('div');
        infoDiv.innerText = `
         "instruction": ${recipe.instruction},
        "cookTimeMinutes": ${recipe.cookTimeMinutes},
        "servings":  ${recipe.servings},
        "difficulty": ${recipe.difficulty},
        "cuisine": ${recipe.cuisine},
        "caloriesPerServing": ${recipe.caloriesPerServing}`
        // "tags": ${recipe.tags}`
        const ingredientDiv = document.createElement('div');
        const olIngredients= document.createElement('ol');
        olIngredients.classList.add('olIngredients');
       const h3ing = document.createElement('h3');
       h3ing.innerText= `ingredients:`;
        for (const ingredient of recipe.ingredients) {
            const li = document.createElement('li');
            li.innerText = ingredient;

        ingredientDiv.append(h3ing,olIngredients)
        olIngredients.appendChild(li,)
        }
        recipDiv.append(divIdName,ingredientDiv,infoDiv);
        divWrapper.appendChild(recipDiv);    }
    }
)
