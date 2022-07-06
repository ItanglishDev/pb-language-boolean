console.log(3 == "3");
console.log(3 === "3");
//  2.
//  7.
//  9.

let myVar = true;

console.log(!myVar ? "good morning" : "good evening");

let firstName = "" || "John" || 0;
let emptyStr = "" && false && "Hello World";
let zero = ("" && false) || 0;
let seven = 75 && "nine" && 7;

console.log(firstName, emptyStr, zero, seven);
