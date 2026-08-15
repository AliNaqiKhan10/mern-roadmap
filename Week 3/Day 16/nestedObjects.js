// let employee = {
//     name: "Ali Khan",
//     age : 22,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         country: "USA"
//     },
//     skills: ["JavaScript", "React", "Node.js"]
// };  
// console.log("Name: " + employee.name);
// console.log("Age: " + employee.age);
// console.log("Street: " + employee.address.street);
// console.log("City: " + employee.address.city);
// console.log("Country: " + employee.address.country);
// console.log("Skills: " + employee.skills.join(", "));

let product = {
    name: "Laptop",
    price: 150000,
    brand: "Dell",
    stock: 10
};

let keys = Object.keys(product);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key + ": " + product[key]);
}