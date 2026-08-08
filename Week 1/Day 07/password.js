const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter password: ", (answer) => {

    let password = answer;

    while (password !== "12345") {
        console.log("Wrong Password");
        break;
    }

    if (password === "12345") {
        console.log("Login Successful");
    }

    rl.close();
});