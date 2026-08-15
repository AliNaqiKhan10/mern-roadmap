let student = {

    name: "Ali",
    age: 22,

    education: {
        degree: "BSSE",
        semester: 7,
        university: "ABC University"
    },

    city: "Lahore"
};
console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("Degree: " + student.education.degree);

// Object.keys() method to get the keys of the student object
let keys = Object.keys(student);
console.log("Keys: " + keys.join(", "));

// Destructuring the student object
let { name, age, education: { degree, semester, university }, city } = student;
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Degree: " + degree);
console.log("Semester: " + semester);
console.log("University: " + university);
console.log("City: " + city);