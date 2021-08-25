/*
- forEach(CurerrentValue, index, array)
*/

const arr = ["A", "B", "C", "D", ,"F"];

for (let i = 0; i < arr.length; i++){
    //console.log(i);
    //console.log(arr[i]);
    console.log(`${i} - ${arr[i]}`);
}

console.log(`${"#".repeat(30)}`);

arr.forEach((el, i) => {
    console.log(`${i} - ${el}`)
});

console.log(`${"#".repeat(30)}`);

let callbacks = 0;
arr.forEach((el, i) => {
    console.log(`${i} - ${el}`)
    callbacks ++;
});
console.log(callbacks);

console.log(`${"#".repeat(30)}`);