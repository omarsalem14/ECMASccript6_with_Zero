/*
SET
*/
/*
let myArray = [1,2,3,3,4,4,2];
 let mySet = new Set(myArray);

 console.log(mySet);
 console.log(...mySet);
 */

                                        /* Set Methods */

let mySet = new Set('Osama');
mySet.add('osama')
mySet.delete('s')
//mySet.clear();  //Important

console.log(mySet);
console.log(mySet.has('Osama'.toLowerCase()));
console.log(mySet.size);