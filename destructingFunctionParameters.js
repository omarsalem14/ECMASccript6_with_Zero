/*
    Destructuring
    - Object
    - Array
    - Parameter
*/
//Example
const user = {
    username: "Omar",
    age: "23",
    gender: "Mall",
    skills: {
        html: "95%",
        css: "85%",
        js: ["Vuejs", "Reactjs", "Angularjs"]
    }
};

//const {username: u, age: a, skills: { html, css, js: [one, two, three]  } } = user;

//Without Destructuring
/*
function showMyInfo (user){
    console.log(`My name is ${user.username},i'm ${user.age} years old.`);
console.log(`My skills progress is: HTML:${user.skills.html}, CSS:${user.skills.css}`);
console.log(`I have Knowledge in JS like ${user.skills.js[0]}, ${user.skills.js[1]}, ${user.skills.js[2]}`)
}

showMyInfo (user);
*/
//With Destructuring
function showMyInfo ({username: u, age: a, skills: { html: h, css: c, js: [one, two, three]  } }){
    console.log(`My name is ${u},i'm ${a} years old.`);
console.log(`My skills progress is: HTML:${h}, CSS:${c}`);
console.log(`I have Knowledge in JS like ${one}, ${two}, ${three}`)
}

showMyInfo (user);