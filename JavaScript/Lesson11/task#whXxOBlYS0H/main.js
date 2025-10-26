
// – взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
.then(recipesObject => {
    const {recipes} = recipesObject;
    for (const recipe of recipes) {
        const resipeDiv = document.createElement('div');
        resipeDiv.classList.add('recipe');
        recipe.innerText = `${recipe.name} - ${recipe.description}`;
    }
    }
)
