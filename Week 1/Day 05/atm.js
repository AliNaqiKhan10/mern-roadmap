const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Balance Inquiry");
console.log("2. Cash Withdrawal");
console.log("3. Deposit");
console.log("4. Mini Statement");

rl.question('Enter your choice (1-4): ', (answer) => {
    const choice = parseInt(answer, 10);

    switch(choice){
        case 1:
            console.log("You have selected Balance Inquiry");
            break;
        case 2:
            console.log("You have selected Cash Withdrawal");
            break;
        case 3:
            console.log("You have selected Deposit");
            break;
        case 4:
            console.log("You have selected Mini Statement");
            break;
        default:
            console.log("Invalid Choice");
    }

    rl.close();
});