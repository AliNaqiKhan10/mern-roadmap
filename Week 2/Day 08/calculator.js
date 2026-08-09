function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

console.log(add(20, 5));
console.log(subtract(20, 5));
console.log(multiply(20, 5));
console.log(divide(20, 0));