/*
-- Promise
*/
// let myRequest = new XMLHttpRequest();

// myRequest.onload = () => {
//     if (this.readyState === 4 && this.status === 200) {
//         // console.log(this.responseText);
//         console.log(JSON.parse(this.responseText)[0].name);
//     }
// };

// myRequest.open("GET", "https://api.github.com/users/ElzeroWebSchool/repos", true);
// myRequest.send();


// ========================== GET Particular Thing In The ======================

// function getFirstRepo(apiURL){
//     let myRequest = new XMLHttpRequest();

// myRequest.onreadystatechange = () => {
//     if (this.readyState === 4 && this.status === 200) {
//         // console.log(this.responseText);
//         console.log(JSON.parse(this.responseText)[0].name);
//     }
// };

// myRequest.open("GET", apiURL, true);
// myRequest.send();
// };

// getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos");



const getFirstRepo = (apiURL) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText)[0].name);
      }else{
        reject(ERROR(this.statusText));
      }
    };
    myRequest.open("GET", apiURL, true);
    myRequest.send();
  });
};

// getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos").then(
//     (result) => console.log("result"),
//     (error) => console.log("error"),
// );


getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos").then(
    (result) => {
        let newElement = document.createElement("div");
        let elementText = document.createTextNode(result);
        newElement.appendChild(elementText);
        document.body.appendChild(newElement);
},(error) => console.log(error));