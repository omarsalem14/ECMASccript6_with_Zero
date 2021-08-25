/*
--Generators
--Create Infinfit Numbers
*/

function * craetInfinit (){  //Don't Loop On This 
    let i =0;
    while(true){
        yield i++
    }
}

let infinfitIterator = craetInfinit();

console.log(infinfitIterator.next());
console.log(infinfitIterator.next());
console.log(infinfitIterator.next());
console.log(infinfitIterator.next());
console.log(infinfitIterator.next());
console.log(infinfitIterator.next());
console.log(infinfitIterator.next());
console.log(infinfitIterator.next());


for(let number of infinfitIterator){
    if (number > 20){
        break;
    }
    console.log(number);
};