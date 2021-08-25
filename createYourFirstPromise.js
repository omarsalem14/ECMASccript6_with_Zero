/*
======================== Promise Intro ========================
--- Promise Is A Placeholder For A Future Value 
--- javaScript Uses The Callback For Asynchronous Programing
---- [-1] Function Called And Do The Task
---- [-2] Action Complete
---- [-3] Another Function Called
---- [-4] Action Called
---- [-5] Another Function Called
--- In Complex Case => Every Call Add Nesting Level
--- http://callbackhell.com/
--- Promise Avoiding Callback Hell Or Pyramids Of DOOM
--- Promise One Of This Status..
---- [-1] Pending => Not Fullfilled Or Rejected
---- [-2] Fullfilled => Operation Successed
---- [-3] Rejected => Operation Failed
*/

const myPromise = new Promise ((resolve, reject) =>{
    let connect = true;
    if(connect){
        resolve("Connectin Established");
    }else{
        reject(Error("Connection Failled"));
    }
}).then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
);

// const theResolved = resolved => console.log(resolved),       // Way
// const theRejected = rejected => console.log(rejected)

// myPromise.then(theResolved, theRejected);




// myPromise.then(                                              // Another Way
//     (resolved) => console.log(resolved),
//     (rejected) => console.log(rejected)
// );