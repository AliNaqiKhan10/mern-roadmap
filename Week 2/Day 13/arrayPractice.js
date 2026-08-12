// let students = [
//     "Ali",
//     "Ahmed",
//     "Usman",
//     "Hamza",
//     "Bilal"
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log("Student " + (i + 1) + ": " + students[i]);
// }

// let marks = [45, 67, 82, 39, 91, 85];
// for (let i = 0; i < marks.length; i++) {
//     if(marks[i] >= 50) {
//         console.log("Student passed with marks: " + marks[i]);
//     }
// }

// let cart = [
//     "Laptop",
//     "Mouse",
//     "Keyboard"
// ];
// console.log("Shopping Cart Items:");
// for (let i = 0; i < cart.length; i++) {
//     console.log(`${i + 1}. ${cart[i]}`);
// }

let prices = [10000, 2500, 5000, 8000];
let totalPrice = 0; 
for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
}
if (totalPrice > 100000) {
    console.log("Free shipping applied. \nTotal Price: " + totalPrice);
} else {
    console.log("Delivery charges Rs 2000/- apply.\nTotal Price: " + (totalPrice + 2000));
}
