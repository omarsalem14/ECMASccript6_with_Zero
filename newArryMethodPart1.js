/*
--New Array Method
--Array.of
--Array.from
--Array.fill
*/
// Array.of(Elements of Creay The Array)

let oldArray = Array(100);

console.log(oldArray);
console.log(oldArray.length);


let newArray = Array.of(100);

console.log(newArray);
console.log(newArray.length);

//Array.from(iterable, Mapfn, This)

let myName = "Omar";
let arrayOfLetters = Array.from(myName);

console.log(myName);
console.log(arrayOfLetters);

let myNumbers = [10, 20, 30, 40, 50, 60, 100];
let numMinusTen = Array.from(myNumbers, number => number - 10);

console.log(numMinusTen);

// Array.fill(Value to fill, Start default =0, End default Array.length)

let theNumbers = [1, 90, 80, 50, 150];

// theNumbers.fill(-5);  //No Start And End
// theNumbers.fill(-5, 1);  //No End
theNumbers.fill(-5, 1, 4);

console.log(theNumbers);




