const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (answer) => {

    let number = parseInt(answer);

    console.log("\nMultiplication Table\n");

    for(let i = 1; i <= 10; i++){

        console.log(`${number} x ${i} = ${number * i}`);

    }

    rl.close();

});