
//– створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
// let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
let nums = [11,21,3];
function sortNums (array,direction){
    if(direction === 'ascending') console.log(array.sort((a,b) => a-b));
    if(direction === 'descending') console.log(array.sort((a,b) => b-a));
}
sortNums(nums,'ascending')
