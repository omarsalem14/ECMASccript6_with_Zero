/*
-- OOP => Classes Part 1
-- Old And New Class Syntax
*/

//Old Syntax

// function User (name, age){
//     this.name = name;
//     this.age = age;
// };

// User.prototype.getInfo = function (){
//     console.log(`Hello ${this.name},Your Age Is:${this.age} Years Old`)
// };

// User.prototype.getDays = function (){
//     console.log(`You Lived ${this.age * 365} Days`)
// };

// const firstUser = new User ("Omar", 23)

// firstUser.getInfo();
// firstUser.getDays();

//  New Syntax

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`Hello ${this.name},Your Age Is:${this.age} Years Old`);
    }
    getDays() {
        console.log(`You Lived ${this.age * 365} Days`);
    }
};



const firstUser = new User ("Omar", 23)

firstUser.getInfo();
firstUser.getDays();

