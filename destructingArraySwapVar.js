/*
    Destructuring
    -Array
    -Object
    -Parameter
*/
//Example
//Old Way
/*
var book ="Video";
video = "Book";

var stach = book;

var book = video;

var video = stach;

console.log(`The book is ${book},and the video is ${video}`);
*/
//Example
//New Way
var book ="Video";
video = "Book";

[book, video] = [video, book];

console.log(`The book is ${book},and the video is ${video}`);