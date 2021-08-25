/*
--New Array Method
--Array.find
--Array.findIndex
--Array.copyWithin()
*/
// Array.find(Not Returning All Values)

let myNumbers =[10, 20, 30, 50, 85];
let found = myNumbers.find(el => el >10);

console.log(found);

console.log(`${"#".repeat(30)}`);

// Array.findIndex(Not Returning All Values)

let myNumbers1 =[10, 20, 30, 50, 85];
let found1 = myNumbers1.findIndex(el => el >10);

console.log(found1);

console.log(`${"#".repeat(30)}`);

// Array.copyWithin(Target, Start Default 0, End Default Array.Length)
let myLetters =["A","B","C","D","E","F","G","H"]

console.log(myLetters.copyWithin(1, 5, 7));  //End Not Include
console.log(myLetters);

console.log(`${"#".repeat(30)}`);

