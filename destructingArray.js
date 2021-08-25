/*
  -Object
  -Array
  -Parameter
*/

//Example
/*
const food = ["Burger", "Pizza", "Chicken", "Zinger", "Rice"];

const [one, , three, four,] = food;

console.log(`I Love ${one},${three},${four}.`);
*/

//Exmaple
/*
const food = ["Burger", "Pizza", "Chicken", ["Apple", "Banana","Mango", ["Lemon", "Orange"]]];

const [one, two, three,[fr1, fr2, fr3, [acid1, acid2]]] = food;

console.log(`I Love ${one},${two},${three},and from fruits i love ${fr1},${fr2},and ${fr3},and from acids ${acid1},${acid2}.`);
*/

//Example
const food = ["Burger", "Pizza", "Chicken", "Apple", "Banana", "Mango"];

const [one, two, three, ...otherFood] = food;

console.log(`I Love ${one},${two},${three},and ${otherFood}`);