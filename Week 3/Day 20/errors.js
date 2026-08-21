// Types of Errors in JavaScript

// 1. Syntax Errors
// Syntax errors occur when the code violates the rules of the JavaScript language.
// Example:
try {
    let a;
}
catch (e) {
    console.error("Syntax Error:", e.message);
}

// 2. Reference Errors
// Reference errors occur when a variable is referenced that has not been declared.
// Example: 
try {
    console.log(nonExistentVariable);
}   
catch (e) {
    console.error("Reference Error:", e.message);
}

// 3. Type Errors
// Type errors occur when a value is not of the expected type.
// Example:
try {
    let num = 5;
    num.toUpperCase(); // toUpperCase is not a function for numbers
}
catch (e) {
    console.error("Type Error:", e.message);
}

// 4. Range Errors
// Range errors occur when a value is not within the allowed range.
// Example:
try {
    let arr = new Array(-1); // Negative array size is not allowed
}
catch (e) {
    console.error("Range Error:", e.message);
}