//variable game

var a = 10;
let b = 20;
const c = 30;
d = 40; // This will create a global variable

console.log(typeof(d)); // Output: "number"
console.log(typeof(e)); // Output: "undefined"
console.log(typeof(a)); // Output: "number"
console.log(typeof(b)); // Output: "number"
console.log(typeof(c)); // Output: "number"

var a = 100; // This will not cause an error because 'var' allows redeclaration
console.log(a);