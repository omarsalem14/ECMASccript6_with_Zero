/*
- Symbol Part1
*/

/*
const mySymbol = Symbol();
console.log(typeof mySymbol);  //Symbol Data Type

const mySymbolOne = Symbol();
const mySymbolTwo = Symbol();
console.log(mySymbolOne === mySymbolTwo); //Unique

const myNewSympol = Symbol();

const myObject = {
    username: "Omar Gzera",
    website: "Gzera.org",
    [myNewSympol]: "This hidden from iteration"
}
console.log(myObject);

for (let val of Object.entries(myObject)){
    console.log(val)
}

console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));

console.log(Object.getOwnPropertySymbols(myObject));   //Important

console.log(JSON.stringify(myObject));

*/

/*
- Symbol Part2
*/

//Example For Key (for)
/*
const mySymbolOne = Symbol.for("Testing1");   //Symbol Is Not Exist, Create It
const mySymbolTwo = Symbol.for("Testing2");   //Symbol Is Already Exist,Return It
console.log(mySymbolOne === mySymbolTwo);
console.log(Symbol.keyFor(mySymbolTwo));
*/  

/*
const mySymbolOne = Symbol("Testing1");    //Symbol Is Not Auto Convert To String
alert(mySymbolOne.toString());
*/

const mySymbolOne = Symbol("Testing1");   
alert(mySymbolOne.description);

















