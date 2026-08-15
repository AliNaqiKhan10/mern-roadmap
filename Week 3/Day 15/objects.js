let student = {
    name: "Ali",
    age: 22,
    degree: "BSSE",
    semester: 6
};

console.log(student);

// Update semester
student.semester = 7;
console.log(student);

// Add new property
student.city = "Lahore";
console.log(student);

// Delete property
delete student.city;
console.log(student);

let product = {
    name: "Laptop",
    price: 150000,
    brand: "Dell",

    showInfo: function() {
        console.log(this.name);
        console.log(this.price);
        console.log(this.brand);
    }
};
product.showInfo();
product.price = 140000;
product.showInfo();