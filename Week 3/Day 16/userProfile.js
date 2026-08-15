let user = {
    name: "Ali",
    email: "ali@example.com",

    profile: {
        age: 25,
        city: "Lahore"
    },

    education: {
        degree: "BSSE",
        semester: 6
    }
};
console.log("Name: " + user.name);
console.log("Email: " + user.email);
console.log("City: " + user.profile.city);
console.log("Degree: " + user.education.degree);

let keys = Object.keys(user);
console.log("Top-level Keys: " + keys.join(", "));

let {name, email, profile: {age, city}} = user;
console.log("Name: " + name);
console.log("Email: " + email);
console.log("Age: " + age);
console.log("City: " + city);