const recipes = [
    {
    name: 'Salad',
    prepMinutes: 15,
    calories: 240,
    ingredients: ['cucumber', 'tomatoes', 'feta', 'olives', 'olive oil']
},
    {name: 'Pasta Pesto',
        prepMinutes: 20,
        calories: 460,
        ingredients: ['spaghetti', 'basil pesto', 'parmesan', 'pine nuts', ]

    },
    {
        name: 'Chicken Teriaci',
        prepMinutes: 35,
        calories: 520,
        ingredients: ['chicken things', 'soy sausage', 'mirin', 'garlic', 'sezam']
    },
    {
        name: 'Veggie Omelette',
        prepMinutes: 10,
        calories: 310,
        ingredients: ['eggs', 'spinach', 'mushrooms', 'onion ', 'butter']

    }
]

const pageRecipes = document.createElement('div');
pageRecipes.classList.add('recipes');
for (const recipe of recipes) {
const recipe=document.createElement('div');
recipe.classList.add('recipe');
const title = document.createElement('h2');
title.classList.add('recipe-title');
title.innerText =recipe.name;
const cookingTime=document.createElement('p');
cookingTime.classList.add('cookingTime');
cookingTime.innerText=recipe.prepMinutes;
const calories=document.createElement('p');
calories.classList.add('calories');
calories.innerText=recipe.calories;
const ingredients=document.createElement('ul');
ingredients.classList.add('ingredients');
    for (const ingredient of ingredients) {
        const ingredient=document.createElement('p');
        ingridient.classList.add('ingridient');
        ingridient

    }
recipe.append(title, cookingTime, ingredients);
pageRecipes.appendChild(recipe);
document.body.appendChild(pageRecipes);}
