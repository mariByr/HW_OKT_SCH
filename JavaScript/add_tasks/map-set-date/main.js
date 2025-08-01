let tomorrow = new Date(2025, 7,2,9,10,12,15);
console.log(tomorrow.getTime());
console.log(tomorrow.getFullYear())
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow)


// map
let mymap = new Map();
mymap.set( 1,'one');
mymap.set('js',95)
 console.log(mymap.get('js'))
console.log(mymap.keys());
arrayFrommap=Array.from(mymap.keys());
console.log(arrayFrommap);

// set
let set = new Set( [12,15,47]);
set.add('one');
console.log(set);
console.log(set.has(28));
arrayFromset=Array.from(set)
console.log(arrayFromset);
// arrayFrommap = Array.from(mymap);
