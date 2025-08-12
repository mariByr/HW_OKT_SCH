
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4},

];
for (const cours of coursesAndDurationArray) {
    let div = document.createElement('div')

    div.innerText = `${cours.title} ${cours.monthDuration}`;
    document.body.appendChild(div)

}
