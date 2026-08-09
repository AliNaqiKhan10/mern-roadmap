// Function expression
const add = function(a, b) {
  return a + b;
}
console.log("Sum: " + add(2, 3));

// Arrow function
const multiply = (a, b) => {
  return a * b;
};
console.log("Product: " + multiply(4, 5));

// Arrow function with implicit return
const subtract = (a, b) => a - b;
console.log("Difference: " + subtract(10, 4));

// Function expression with parameters
const divide = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
};
console.log("Quotient: " + divide(10, 2));

// Function expression with default parameters
const greet = function(name = "Guest") {
  return `Hello, ${name}!`;
};
console.log("Greeting: " + greet());
console.log("Greeting: " + greet("Alice"));

// Function expression with rest parameters
const sumAll = function(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log("Sum of all numbers: " + sumAll(1, 2, 3, 4, 5));

// Scope Experiment
let globalVar = "I am a global variable";
console.log("Global variable: " + globalVar);
const scopeTest = function() {
  let localVar = "I am a local variable";
  console.log("Inside function: " + localVar);
  console.log("Accessing global variable inside function: " + globalVar);
}
scopeTest();
console.log(localVar); // This will throw an error because localVar is not defined in this scope