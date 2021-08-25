/*
-- The Promise
--- Ignoring The Pyramid Of Doom
*/

const myPromise = new Promise((resolve, reject) => {
    let thePosts = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J"]
    resolve(thePosts);
}); 
myPromise.then((result) =>{
    console.log(`Number Of Post Is : ${result.length} posts`);
    return(result)
})
.then((result) =>{
    console.log("#".repeat(50));
    console.log(`The First Post Is: ${result[0]}`);
    return(result)
})
.then((result) =>{
    console.log("#".repeat(50));
    console.log(`The Last Post Is: ${result[result.length -1]}`);
    return(result)
}).then((result) =>{
    console.log("#".repeat(50));
    console.log(`Every Page Has 2 Posts`)
    console.log(`Application Has ${result.length / 2} Pages`);
    return(result)
});