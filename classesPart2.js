/*
-- OOP => Classes Part 2
-- Old And New Class Syntax
*/
import user from './app.js'

class Admin extends user{
    constructor(name, email){
        super(name, email);
    }
}

let firstAdmin = new Admin ("Omar", "Osalem@gmail.com");
firstAdmin.getInfo();