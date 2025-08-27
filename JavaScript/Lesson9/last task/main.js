
//– Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const course of coursesArray) {
    const div = document.createElement('div');
    div.classList.add('course');
    course.innerHTML = course;
    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = `Title: ${ course.title}`;
    const durations = document.createElement('div');
    durations.classList.add('durations');
    const monthDuration = document.createElement('p');
    monthDuration.classList.add('monthDuration');
    monthDuration.innerText = `monthDuration: ${course.monthDuration}`;
    const hourDuration = document.createElement('p');
    hourDuration.classList.add('hourDuration');
    hourDuration.innerText = `hourDuration: ${course.hourDuration}`;
    durations.append(monthDuration, hourDuration);
    const ul = document.createElement('ul')
    ul.classList.add('modulesList')
    const firstLi = document.createElement('li');
   firstLi.innerHTML = `Modules: ${ course.modules[0] }`;
    firstLi.classList.add('liStart');
    ul.appendChild(firstLi);
    for (let i = 1; i < course.modules.length; i++) {
        const moduleElement = document.createElement('li');
        moduleElement.innerText = course.modules[i];
        moduleElement.classList.add('moduleElement');
         ul.appendChild(moduleElement);
    }

    div.append(title, durations,ul);
    document.body.appendChild(div)
}
