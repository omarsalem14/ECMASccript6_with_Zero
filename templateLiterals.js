                                               /* Template Literals */

const  myGender = 'Male';                                               
let oldWay = "Hello Guys I'm " +(myGender === "Male" ? 'Mr.' : 'Mrs.')+ "Omar \n" +
"My Gender Is: "+myGender+"" 

let newWay = `Hello Guys I'm ${(myGender === "Male" ? 'Mr.' : 'Mrs.')}Omar
My Gender Is: ${myGender}`
console.log(oldWay)
console.log(newWay);


let userName = "Omar",
age = 23;

const myHtmlMarkup =`
<div class="card">
<h2 class="nane">${userName}</h2>
<span class="age">${age}</span>
</div>
`;
console.log(myHtmlMarkup);
document.body.innerHTML = myHtmlMarkup;