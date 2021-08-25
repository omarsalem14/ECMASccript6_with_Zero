/*
-- Promise All & Race
*/


const myFirstPromise = new Promise ((resolve, reject) => {
    let connect = true;
    if (connect) {
        resolve("First Promise Resolved");
    } else{
        reject("First Promise Rejected")
    }
});

const mySecondPromise = new Promise ((resolve, reject) => {
    let connectt = true;
    if (connectt) {
        resolve("Second Promise Resolved");
    } else{
        reject("Second Promise Rejected")
    }
});

Promise.all([myFirstPromise, mySecondPromise]).then((result) =>{
    console.log(result);
});


const myFirPromise = new Promise ((resolve, reject) => {
    window.setTimeout(() =>{
        resolve("First Promise Resolved");
    }, 500);
});

const mySecPromise = new Promise ((resolve, reject) => {
    window.setTimeout(() =>{
        resolve("Second Promise Resolved");
    }, 100);
});

// myFirPromise.then((result) => console.log(result));
// mySecPromise.then((result) => console.log(result));

Promise.race([myFirPromise, mySecPromise]).then((result) => {console.log(result)});   // Will Take The First One Fetched (mySecPromise)