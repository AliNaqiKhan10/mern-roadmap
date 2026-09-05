let title = document.getElementById("title");
let profile = document.getElementById("profile");
let button = document.getElementById("change");

button.addEventListener("click", function() {
    title.textContent = "My Student Profile";
    profile.innerHTML = `<p>Name: Ali</p>
        <p>Course: Web Development</p>
        <p>Skill: JavaScript</p>
    `;
    title.style.color = "blue";
    title.style.fontSize = "30px";
    title.style.fontFamily = "Arial, sans-serif";
    title.style.textAlign = "center";
    title.style.padding = "20px";
});