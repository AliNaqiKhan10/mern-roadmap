let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Headphones"
];
cart.push("Monitor");
console.log("Monitor added at the end: " + cart); // ["Laptop", "Mouse", "Keyboard", "Headphones", "Monitor"]

cart.pop();
console.log("Last item removed: " + cart); // ["Laptop", "Mouse", "Keyboard", "Headphones"]

cart.unshift("Webcam");
console.log("Webcam added at the beginning: " + cart); // ["Webcam", "Laptop", "Mouse", "Keyboard", "Headphones"]

cart.shift();
console.log("First item removed: " + cart); // ["Laptop", "Mouse", "Keyboard", "Headphones"]

let subArray = cart.slice(1, 3);
console.log("Subarray after slicing: " + subArray); // ["Mouse", "Keyboard"]

cart.splice(2, 1);
console.log("Item removed using splice: " + cart); // ["Laptop", "Mouse", "Headphones"]

cart.splice(1, 1, "Wireless Mouse");
console.log("Item replaced using splice: " + cart); // ["Laptop", "Wireless Mouse", "Headphones"]