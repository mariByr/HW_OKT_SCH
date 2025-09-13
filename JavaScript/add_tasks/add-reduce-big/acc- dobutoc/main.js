
const nums = [1, 2, 4, 5, 6, 9, 10];
const product = nums.reduce((acc, num) => {
     return acc * num

}, );
console.log(product);

const letters= [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ];
const vovels= letters.reduce((acc, letter) => { if (['a' , 'e', 'i'].includes(letter)){
    return acc + 1;}
    return acc;
}, 0);
console.log(vovels);
