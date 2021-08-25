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
 --=================================================
-- Asynchronous VS Synchronous Programming
 */

 // Synchronous
 console.log("Good");
 window.alert("Bad")
 console.log("Better");

 // Asynchronous 
 console.log("Function To Do SomeThing");
 window.setTimeout(() =>console.log("No Delaying"), 1000);
 window.setTimeout(() =>console.log("Go Ahead"), 2000)
 console.log("Waiting Is Too Bad");
 