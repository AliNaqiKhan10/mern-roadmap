let secretNumber = 7;
let guess = 3;

while (guess !== secretNumber) {

    console.log("Guess:", guess);
    console.log("Wrong!");

    guess++;
}

console.log("Guess:", guess);
console.log("Correct! 🎉");