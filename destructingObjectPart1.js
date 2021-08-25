/*
    -Object
    -Array
    -Parameter
 */


//Example Old Way
/*
var user ={
    name:'Omar',
    gender:'male',
    age:'23'
};
var u = user.name,
    g = user.gender,
    a = user.age;

console.log(`My name is ${u}, my gender is ${g}, i'm ${a} years old.`)
*/
//Example New Way

var user ={
    name:'Omar',
    gender:'male',
    age:'23',
    theme:'Red',
    langs:{
        html: '95%',
        css: '50%',
        js: '25%'
    }
};
    const {name: n, gender: g, age: a, theme: t ='blue', langs: {html: h, css: c, js: j}, python: p = '10%'} = user;

console.log(`My name is ${n}, my gender is ${g}, i'm ${a} years old, my theme colour is ${t}, HTML progress is ${h}, python progress is ${p}`);



