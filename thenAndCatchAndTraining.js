// /*
// -- Promise 
// */

const myPromise = new Promise ((resolve, reject) =>{
    //Only One State Allowed To Operate
    // resolve("Resolved"),
    // reject("Rejected")  // It Will Be Ignored

    if(Math.random() * 100 <50){
        resolve("Good");
    }else{
        reject("Bad")
    };
});

    myPromise.then(
        (resolved) => console.log(resolved),
        (rejected) => console.log(rejected)
        );

    // myPromise.then(null,(rejected) => console.log(rejected));   // Reject Handelded Only

// myPromise.catch((rejected) => console.log(rejected));





// ===================================== Callback Hell  ===============================
// myPromise.catch(rejected) => console.log(rejected);

// a(function(resultsFormA){
//     b(resultsFormA, function(resultsFormB) {
//         c(resultsFormB, function(ResultsFormC){
//             d(resultsFormC, function(resultsFormD){
//                 E(resultsFormD, function(resultsFormE){
//                     f(resultsFormE, function(resultsFormF){
//                         console.log(resultsFormF);
//                     }, failurCallback)
//                 }, failurCallback)
//             }, failurCallback)
//         }, failurCallback)
//     }, failurCallback)
// }, failurCallback);

// a()

// .then(function(resultsFormA) {
//     return b(resultsFormA);

// }).then(function(resultsFormB) {
//     return c(resultsFormB);

// }).then(function(resultsFormC) {
//     return d(resultsFormC);

// }).then(function(resultsFormD) {
//     return E(resultsFormD);

// }).then(function(resultsFormE) {
//     return F(resultsFormE);

// }).then(function(resultsFormF) {
//     console.log('Final Result: ' + resultsFormF);
// }).catch(failurCallback);


// a()
// .then((resultsFormA) => b(resultsFormA))
// .then((resultsFormB) => C(resultsFormB))
// .then((resultsFormC) => d(resultsFormC))
// .then((resultsFormD) => E(resultsFormD))
// .then((resultsFormE) => F(resultsFormE))
// .then((resultsFormF) => console.log('Final Result: ' + resultsFormF))
// .catch(failurCallback);