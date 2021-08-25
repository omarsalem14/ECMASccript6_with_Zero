                          //Arrow Funtion//

let test = _ => document.getElementById('show').innerHTML = this;
//Window Object Called The Function
window.onload = test;

//Button Object called The Function
document.getElementById('button').addEventListener('click',test);

/*Exmple
function person(){

    this.age = 0;

    setInterval(function(){

        this.age++;

        console.log(this.age);
    
    }, 1000);
}
var user = person();
 */

/*Comming EXample Before Arrow Function
function person(){

    this.age = 0;

    let that = this;

    setInterval(function(){

        that.age++;

        console.log(that.age);
    
    }, 1000);
}
let user = new person();
*/

//After Arrow Function.....
function person(){

    this.age = 0;

    setInterval(() => {

        this.age++;

        console.log(this.age);
    
    }, 1000);
}
let user = new person();