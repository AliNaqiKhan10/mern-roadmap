let purchseAmount = 10000;
let discount = 0;

if (purchseAmount >= 10000) {
    discount = purchseAmount * 0.2;
}
else if (purchseAmount >= 5000) {
    discount = purchseAmount * 0.1;
}
else{
    discount = 0;
}
let finalAmount = purchseAmount - discount;
console.log("Purchase Amount: " + purchseAmount);
console.log("Discount: " + discount);
console.log("Final Amount: " + finalAmount);