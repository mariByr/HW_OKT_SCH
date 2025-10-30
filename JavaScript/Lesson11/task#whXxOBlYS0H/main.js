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
        divIdName.classList.add('recipe-name');
        divIdName.innerHTML = `"Id":${recipe.id}, 
        "Name":${recipe.name}`;
        const divInstruction = document.createElement('div');
        const h3inst = document.createElement('h3');
        h3inst.innerText= `Instructions:`;
        const instructionsOl = document.createElement('ol');
        const steps = Array.isArray(recipe.instructions)?
            recipe.instructions : [];
        for (const instructionElement of steps) {
            const li=document.createElement('li');
            li.innerText=instructionElement;
          instructionsOl.appendChild(li)
            divInstruction.append(h3inst, instructionsOl)
        }
        const infoDiv = document.createElement('div');
        infoDiv.innerText = `
        "CookTimeMinutes": ${recipe.cookTimeMinutes},
        "Servings":  ${recipe.servings},
        "Difficulty": ${recipe.difficulty},
        "Cuisine": ${recipe.cuisine},
        "CaloriesPerServing": ${recipe.caloriesPerServing}`
        const ingredientDiv = document.createElement('div');
        const olIngredients= document.createElement('ol');
        olIngredients.classList.add('olIngredients');
       const h3ing = document.createElement('h3');
       h3ing.innerText= `Ingredients:`;
        for (const ingredient of recipe.ingredients) {
            const li = document.createElement('li');
            li.innerText = ingredient;

        ingredientDiv.append(h3ing,olIngredients)
        olIngredients.appendChild(li,)
        }
        recipDiv.append(divIdName,ingredientDiv,divInstruction,infoDiv);
        divWrapper.appendChild(recipDiv);    }
    }
)
