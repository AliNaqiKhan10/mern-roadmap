const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Programming Fundamentals");
console.log("2. Data Structures and Algorithms");
console.log("3. Web Development");
console.log("4. Mobile Development");

rl.question('Enter your choice (1-4): ', (answer) => {
    const choice = parseInt(answer, 10);

    switch(choice){
        case 1:
            console.log("You have selected Programming Fundamentals");
            break;
        case 2:
            console.log("You have selected Data Structures and Algorithms   ");
            break;
        case 3:
            console.log("You have selected Web Development");
            break;
        case 4:
            console.log("You have selected Mobile Development");
            break;
        default:
            console.log("Invalid Choice");
    }

    rl.close();
});