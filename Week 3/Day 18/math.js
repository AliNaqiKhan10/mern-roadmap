// let num = Math.floor(Math.random() * 100) + 50;
// console.log(num);

let rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let secretNumber = Math.floor(Math.random() * 10) + 1;

rl.question("Enter your guess: ", function(answer) {
    if (parseInt(answer) === secretNumber) {
        console.log("Congratulations! You guessed the correct number.");
    }
    else {
        console.log(`Sorry, the correct number was ${secretNumber}.`);
    }
    rl.close();
});