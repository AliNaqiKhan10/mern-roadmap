const element = document.getElementById("heading");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", function () {
    message.textContent = "Button was clicked!";
    element.textContent = "Welcome to DOM";

});