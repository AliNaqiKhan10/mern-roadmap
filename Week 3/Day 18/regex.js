// The 'i' flag makes the regex case-insensitive
let pattern = /ali/i;
console.log(pattern.test("ali")); // true
console.log(pattern.test("Ali")); // true

let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.match(/the/g)); // ["The"]

let text = "I love JavaScript. JavaScript is awesome!";

console.log(text.match(/JavaScript/g)); // ["JavaScript", "JavaScript"]

let num = /\d/;
console.log(num.test("123")); // true
console.log(num.test("abc123")); // true

console.log(text.replace(/JavaScript/g, "JS")); // "I love JS. JS is awesome!"