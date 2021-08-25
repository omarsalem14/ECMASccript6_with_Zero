/*Regular Function With No Parameters*/
let regularFunction=function(){
    return 2;
}
console.log(regularFunction());

/*Arrow Function*/
/* If I HAve On Statment ican remove the curly braces and "return" */

let arrowFunction1=() => {
    return 187;
}   
console.log(arrowFunction1());

let arrowFunction2= _ => 188;
console.log(arrowFunction2());

/*Regular Function With One Parameter*/
let regularFunction1=function(param){
    return param * 2;
}
console.log(regularFunction1(16));

/*Arrow Function With One Parameter*/
let arrowFunction3= (param) => param * 2;
console.log(arrowFunction3(18));

let arrowFunction4= param => param * 2;
console.log(arrowFunction4(20));

/*Regular Function With Multiple Parameters*/
let regularFunction2=function(param1,param2){
    return param1 * param2;
}
console.log(regularFunction2(7,7));

/*Arrow Function With Multiple Parameters*/
let arrowFunction5= (param,param1) => param * param1;
console.log(arrowFunction5(4,3));
