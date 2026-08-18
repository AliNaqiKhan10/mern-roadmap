let pattern = /\d/;
let username = "ali_ 123";
if (pattern.test(username) && /\w/.test(username) && /\_/.test(username)  && !/\s/.test(username)) {
    console.log("Username is valid.");
} else {
    console.log("Username is not valid.");
}