/*
- forEach(CurerrentKey, CurrentValue, Set)
*/

const mySet = new Set ([1,1,2,2,3,4,5,5]);

mySet.forEach((item1, item2) => {
    console.log(`${item1} - ${item2}`);
});

console.log(`${"#".repeat(30)}`)


// forEach(Value, Key, Map)

const myMap = new Map([ ["B",2], ["C",3], ["A",1], ["x",{}] ]);

myMap.forEach((v, k )=> {
    console.log(`${k} - ${v}`)
});