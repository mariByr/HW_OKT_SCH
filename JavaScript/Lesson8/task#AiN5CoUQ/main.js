
// Створити функцію, яка робить глибоку копію об’єкта.

    // Додати перевірки на undefined, null, NaN.

    // Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function cloner(object){

     if(object){
        let functions = [];
        for (const key in object) {
            if(typeof object[key] === 'function'){
                const functionClone =object[key].bind({});
                functions.push({functionClone,key});
            }
            const cloneObj = JSON.parse(JSON.stringify(object));
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!')
}
