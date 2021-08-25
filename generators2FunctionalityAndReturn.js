/*
-Generators Part 2
Functionality And Return
*/

// function orderBook(){
//     window.alert("youClicked to Order The Book")
//     console.log("youClicked to Order The Book")

//     window.alert("youClicked to Add The Book To Chart")
//     console.log("youClicked to Add The Book To Chart")


//     window.alert("Payment IS Done")
//     console.log("Payment Is Done ")
// }
// let ordering = orderBook();

// function * orderBook(){
//     window.alert("youClicked to Order The Book")
//     console.log("youClicked to Order The Book")

//     window.alert("youClicked to Add The Book To Chart")
//     console.log("youClicked to Add The Book To Chart")


//     window.alert("Payment IS Done")
//     console.log("Payment Is Done ")
// }
// let ordering = orderBook();

// function * mySkills(){

//     yield "HTMl";
//     yield "CSS";
//     yield "PHP";
//     yield "JS";
// }

// let theSkills = mySkills();  //The Iterator
// for (let skill of theSkills){
//     console.log(skill);
// }

// for (let s of mySkills()){ //Generator
//     console.log(s);
// }

//========================= Test Return===================

function * sayNames(){
    yield "Omar";
    yield "Ali";
    return "Mai";
    yield "Omar";
}
let theNames = sayNames();

console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());





























