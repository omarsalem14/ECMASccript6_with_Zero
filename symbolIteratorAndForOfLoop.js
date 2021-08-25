/*
Symbol Iterator & For Loop
-Iterable =>Object Has Symbol.Iterator
-Iterator
----Object With Interface Designed For Iteration
----All Iterator Has Next() Method That Return Result Object
----The Result Object Has Two Props
-------[1]Value => The Next Value
-------[2]Done => The Boolean Value To Tell Of The Next Value Exists Or No

For ...Of Loop

-------[1] Call Symbol Iterator With Next Method
-------[2] Save Value Inside The Variable
-------[3] Check For Done If It True => Exist The Loop
*/

let myArr = [1, 2, 3];
let myName = "Omar";
let myNumber = 1000;
let myObject = {};

console.log(typeof(myArr[Symbol.iterator]));
console.log(typeof(myName[Symbol.iterator]));
console.log(typeof(myNumber[Symbol.iterator]));
console.log(typeof(myObject[Symbol.iterator]));

let theIterator = myArr[Symbol.iterator]();

console.log(theIterator);
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());


//================= For ..Of Loop =====================

for(let char of myName){
    console.log(char);
};

for(let num of myArr){
    console.log(num);
};

for(let num of myNumber){
    console.log(num);
};
