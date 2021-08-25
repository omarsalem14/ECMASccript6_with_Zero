/*
- MAP Methods
*/

/*
 - Map
*/

//OBJECT Way

var user = {};    //Empty Object
user['username'] = "Omar";
user['website'] = "Gzera.org";
user["10"] = "String";
user[10] = "Number";

console.log(user)
console.log(user.username);
console.log(user['website']);

//MAPING Way
/*
let myMap = new Map();
myMap.set("username" , "OmarGzera");
myMap.set("10" , "String");
myMap.set(10 , "Number");
myMap.set("False" , "Boolean");
myMap.set({a: 1, b: 2} , "Object");
myMap.set(function doSomething() {}, "Function");

console.log(myMap);
*/
//How To Adding All content while Setting The MAP

let myMap = new Map([
    ["username" , "OmarGzera"],
    ["10" , "String"],
    [10 , "Number"],
    ["False" , "Boolean"],
    [{a: 1, b: 2} , "Object"],
    [function doSomething() {}, "Function"]
]);

console.log(myMap);

console.log(`My Map Elemnets Is: ${myMap.size}`);
console.log(`Using GET Method: ${myMap.get("10")}`);
console.log(`Using GET Method: ${myMap.get(10)}`);
console.log(`Using HAS Method: ${myMap.has("False")}`);
console.log(`Using DELETE Method: ${myMap.delete("False")}`);
//console.log(`Using CLEAR Method: ${myMap.clear}`);
console.log(`My Map Elemnets Is: ${myMap.size}`);