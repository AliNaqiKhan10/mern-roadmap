function hello(callback){
    console.log("Hello World");
    callback();
}
function goodbye(){
    console.log("Goodbye World");
}   
hello(goodbye);

// calculate function that takes two numbers and a callback function to perform an operation on them
function calculate(num1, num2, operation){
    const result = operation(num1, num2);
    console.log("Result: " + result);
}
// Example usage of the calculate function with different operations
calculate(5, 3, function(a, b) {
    return a + b;
});

calculate(5, 3, (a, b) => {
    return a - b;
});

function calculateDiscount(price, discount, callback){
    const discountedPrice = price - (price * discount);
    callback(price, discountedPrice);
}
function displayDiscountInfo(originalPrice, finalPrice){
    console.log("Total Price before discount: " + originalPrice);
    console.log("Final Price after discount: " + finalPrice);
}

calculateDiscount(100, 0.2, displayDiscountInfo);