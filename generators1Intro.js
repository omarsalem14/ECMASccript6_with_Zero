/**
 -Generators Part 1
 -Intro And What Is Generators
 */

// function * geneTickets(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 2;
// }

// let iterator = geneTickets();

// console.log(typeof(iterator));

// console.log(iterator.next().value);
// console.log(`${"#".repeat(30)}`);
// console.log(`Function Give You All Authority TO Showing the Next Value`)

// console.log(iterator.next().value);
// console.log(`${"#".repeat(30)}`);
// console.log(`Function Give You All Authority TO Showing the Next Value`)

// console.log(iterator.next().value);
// console.log(`${"#".repeat(30)}`);
// console.log(`Function Give You All Authority TO Showing the Next Value`)

// console.log(iterator.next().value);
// console.log(`${"#".repeat(30)}`);
// console.log(`Function Give You All Authority TO Showing the Next Value`)

let myNumbers = [10, 20, 30, 40, 50];

function * geneNumbers(nums) {

    for (let i =0; i < nums.length; i++){
        yield nums[i];
    }
}
let generator = geneNumbers(myNumbers);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);




