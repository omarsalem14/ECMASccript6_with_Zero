/*
Map vs WeakMAp
====================================
Map
-Contain Any Type Of Value
-Get Elements Count With .Size
-ForEach Available To Iterator
-You Can Get Its Key

WeakMap
-Contain Only Objects
-You Can't Use Size To Get Elements Count
-ForEach Not Available To Iterator
-You Can't Get Keys
*/
// =================== MAP ===================
// let myMap = new Map();
// let objectOne = {A: 1};

// myMap.set(objectOne, "test");
// myMap.set("B", 2);
// myMap.set("C", 3);
// myMap.set(1, 15);

// console.log(myMap);
// console.log(myMap.get("B"));
// console.log(myMap.get(objectOne));
// console.log(myMap.has("B"));
// console.log(myMap.keys());
// console.log(myMap.size);
// console.log(myMap.values());
// myMap.delete("B");
// console.log(myMap);
// myMap.set("B", 2);
// console.log(myMap);

// =================== WeakMap ===================

let myWeakMap = new WeakMap();
let objectOne = {A: 1};
let objectTwo = {B: 2}

myWeakMap.set(objectOne, "test1");
myWeakMap.set(objectTwo, "test2");
// myWeakMap.set("B", 2);   //Cannot Added Accept Only Object
// myWeakMap.set("C", 3);   //Cannot Added Accept Only Object
// myWeakMap.set(1, 15);    //Cannot Added Accept Only Object

console.log(myWeakMap);

// console.log(myWeakMap.get("B"));
console.log(myWeakMap.get(objectOne));
console.log(myWeakMap.get(objectTwo));

console.log(myWeakMap.has(objectTwo));
myWeakMap.delete(objectTwo);
console.log(myWeakMap.has(objectTwo));

objectOne = null;
console.log(myWeakMap.get(objectOne));
console.log(myWeakMap);

// console.log(myWeakMap.size);

// console.log(myWeakMap.keys);

// console.log(myWeakMap.values);
