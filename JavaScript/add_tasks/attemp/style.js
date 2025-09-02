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
        ingredients: ['spaghetti', 'basil pesto', 'parmesan', 'pine nuts',]

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
    },
]

const pageRecipes = document.createElement('div');
pageRecipes.classList.add('recipes');
for (const recipe of recipes) {
const recipeDiv=document.createElement('div');
recipeDiv.classList.add('recipe');
const title = document.createElement('h2');
title.classList.add('recipe-title');
title.innerText =`Title: ${recipe.name}`;
const divDescription = document.createElement('div');
divDescription.classList.add('divDescription');
const cookingTime=document.createElement('p');
cookingTime.classList.add('cookingTime');
cookingTime.innerText=`prep(min) ${recipe.prepMinutes}`;
const calories=document.createElement('p');
calories.classList.add('calories');
calories.innerText=`kcal ${recipe.calories}`;
divDescription.append(cookingTime, calories);
const headInhrid= document.createElement('h3');
headInhrid.classList.add('headInhrid');
headInhrid.innerText='Ingredients:';
const ul=document.createElement('ul');
ul.classList.add('ingredients');
    for (const ingredient of recipe.ingredients) {
        const scladnuk=document.createElement('li');
        scladnuk.classList.add('ingridient');
        scladnuk.innerText=ingredient;
               ul.appendChild(scladnuk);

    }
recipeDiv.append(title,divDescription,headInhrid, ul);
pageRecipes.appendChild(recipeDiv);}
document.body.appendChild(pageRecipes);
