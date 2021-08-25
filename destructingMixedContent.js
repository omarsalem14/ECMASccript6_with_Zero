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

const {username: u, age: a, skills: { html, css, js: [one, two, three]  } } = user;

console.log(`My name is ${u},i'm ${a} years old.`);
console.log(`My skills progress is: HTML:${html}, CSS:${css}`);
console.log(`I have Knowledge in JS like ${one}, ${two}, ${three}`)
//Example
//Converting The array To object
/*
const user = {
    username: "Omar",
    age: "23",
    gender: "Mall",
    skills: {
        html: "95%",
        css: "85%",
        js: {one:"Vuejs", two:"Reactjs", three:"Angularjs"}
    }
};

const {username: u, age: a, skills: { html, css, js: {one, two, three}  } } = user;

console.log(`My name is ${u},i'm ${a} years old.`);
console.log(`My skills progress is: HTML:${html}, CSS:${css}`);
console.log(`I have Knowledge in JS like ${one}, ${two}, ${three}`)
*/