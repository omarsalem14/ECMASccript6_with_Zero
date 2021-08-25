                                                     /* Rest Parameter */

//Example
/*
function myShow(a, b, c, ...myParams){
    console.log('param a', a);
    console.log('param b', b);
    console.log('param c', c);
    console.log('param myparams', myParams);
}
console.log(myShow(1,2,3,4,5,6,7,8,9));
*/

//Example
function addAll(...myParams){
    let myNumber = 0;
    for (let myParam of myParams) myNumber += myParam;
    return myNumber;
}

console.log(addAll(1));
console.log(addAll(1, 2, 3));
console.log(addAll(1, 2, 3, 50, 100));
