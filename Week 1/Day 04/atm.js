let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal successful. \nRemaining balance: " + balance);
}
else {
    console.log("Insufficient balance. \nCurrent balance: " + balance);
}