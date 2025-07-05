
// створити функцію swap створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах). Функція міняє місцями значення у відповідних індексах

let swap =(arr,i1, i2) =>{
    if(i1 <= arr.length && i2 <= arr.length){
        let temp = arr[i];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
}
