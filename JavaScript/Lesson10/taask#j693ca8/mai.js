
//– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
let accesForm = document.forms.acces;


accesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const ageValue = +accesForm.age.value;
    if (ageValue < 18) {const h1= document.querySelector('h1');
     h1.innerText = 'Заборонений вхід';
    }
})
