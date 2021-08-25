/**
 -- Important Knowledge
 -- Promises
 --- Call Stack
 ---- Mechanism To Make Interpreter Tracking The Call
 ---- When You Call A Function It'Added To The Stack
 ---- When The Function Executed It's Directlty Romoved From The Stack
 ---- The Interpreter Continue Calling From The Point Reached
 ---- Call Stack Detect The Web API, And Leave It To The Browser To Handle It
 ---Web API
 ---- Method Available From Environment => Browser
 ---- When Completed It Add The The Callback,To The Callback Queues
 ---Event Loop
 ---- Wait The Call Stack To Finish
 ---- Get Callback From Callback Queue
 ---- Add Callback to Call Stack
 ---Callback Queue
 */

//  let i = 10;
//  let g = 50;
//  console.log( i +g);

//  function first(){
//      console.log("Helli 1");
//  }

//  function second(){
//      first();
//     console.log("Helli 2");
// }

// second();

// console.log("Frisrt");
// window.setTimeout(() => console.log("Two"), 0);
console.log("One");
window.setTimeout(() => console.log("Three"), 1000);
console.log("Four");
window.setTimeout(() =>console.log("Five"), 0);

// window.setTimeout(() => console.log(myVar), 0);


// let myVar = 200;
// myVar += 100;
