                                                /*Spred Operators */
/*
let arrayone = [1,2,3,4];
let arrayTwo = [5, 6];
//Spread Operators Method
let allArrays = [...arrayone, ...arrayTwo];

console.log(arrayone.concat(arrayTwo));
console.log(allArrays);
*/

//Example
/*
function sum(x, y, z){
    return x + y + z
}
const myNum = [1, 2, 3]

console.log(sum(5,3,2));
console.log(sum(...myNum));
console.log(...myNum);
console.log(myNum);
*/

 //Example
 /*
let arrayOne = [1, 2, 3],
arrayTwo = [4, 5],
customArray = [1, 2, 3, ...arrayTwo, 6, 7]

console.log(customArray);
*/

//Example
/*
let arrayOne = [1, 2, 3],
arrayTwo = arrayOne;

arrayTwo.push(4);

console.log(arrayOne);
console.log(arrayTwo);

//Difference With Spread Operators
let arrayOne = [1, 2, 3],
arrayTwo = [...arrayOne];

arrayTwo.push(4);

console.log(arrayOne);
console.log(arrayTwo);
*/

//Example
let arrayOne = [10, 20, -30, 500, -3, 50]
console.log(Math.min(...arrayOne));

















