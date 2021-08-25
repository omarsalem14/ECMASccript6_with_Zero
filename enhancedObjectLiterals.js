/*
Enhanced Object Literals
1- Proberty Value Shorthand
2- Methoda Shorthand
3- Computed Object Poperty Name
*/

//Example
/*
const username = "Omar",
website = "OmarGzera"

const user = {
    username,
    website
}

console.log(user);
*/

//Example
/*
const user = {
    myMethod (param1){
        return param1;
    }
}
console.log(user.myMethod('Hello '));
*/

//Example
/*
//Normal Variable
const myVariable = 'key';

//Create New Object
const myObject = {myProperty: 'myValue'};

//Add Dynamic Property and Assign A Value
myObject[myVariable] = "value";

console.log(myObject);
*/
//Example (ES6)
const myVariable = 'Value';

//Create New Object
const myObject = {
    myProperty: 'myValue',
    [myVariable]: "It's Dynamic Value"
};

console.log(myObject);