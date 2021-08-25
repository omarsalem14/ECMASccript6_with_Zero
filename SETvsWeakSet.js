/*
Set vs WeakSet
==================================

Set
-Contain Any Type Of Value
-Get Elements Count With .Size
-ForEach Available To Iterator
-You Can Get Its Key

WeakSet
-Contain Only Objects
-You Can't Use Size To Get Elements Count
-ForEach Not Available To Iterator
-You Can't Get Keys

*/
//====================== SET =============================

// let mainObject = {A: 1};

// let mySet = new Set([mainObject]);

// let objectOne = {B: 2};
// let objectTwo = {C: 3};
// mySet.add(objectOne);
// mySet.add(objectTwo);

// console.log(mySet);
// console.log(mySet.has(objectOne));
// console.log(mySet.has(objectTwo));
// console.log(mySet.size);
// console.log(mySet.keys());

// mySet.delete(objectTwo);
// console.log(mySet.has(objectTwo));

// objectOne =null;
// console.log(mySet.has(objectOne));

// console.log(mySet);


// mySet.add("String");
// mySet.add(14);

// console.log(mySet);

// mySet.forEach(v =>{
//     console.log(v)

// });
// ====================================== Weak Set=====================
let mainObject = {A: 1};

let myWeakSet = new WeakSet([mainObject]);

let objectOne = {B: 2};
let objectTwo = {C: 3};
myWeakSet.add(objectOne);
myWeakSet.add(objectTwo);

console.log(myWeakSet);

console.log(myWeakSet.has(objectOne));
console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet.size);
// console.log(myWeakSet.keys());

myWeakSet.delete(objectTwo);
console.log(myWeakSet.has(objectTwo));

objectOne =null;
console.log(myWeakSet.has(objectOne));

console.log(myWeakSet);


// myWeakSet.add("String");
// myWeakSet.add(14);

// myWeakSet.forEach(v =>{

//     console.log(v)
// });


























