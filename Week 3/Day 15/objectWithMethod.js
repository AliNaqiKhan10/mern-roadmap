// let student = {

//     name: "Ali",
//     age: 22,
//     marks: 85,

//     introduce: function() {
//         console.log(
//             "My name is " +
//             this.name +
//             " and my marks are " +
//             this.marks
//         );
//     },

//     checkResult: function() {

//         if (this.marks >= 50) {
//             console.log("Student Passed");
//         } else {
//             console.log("Student Failed");
//         }

//     }
// };
// student.introduce();
// student.checkResult();

let employee = {
    name: "Ali",
    age: 22,
    department: "IT",
    salary: 350000,
    showInfo: function () {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Department: " + this.department);
        console.log("Salary: " + this.salary);
    },
    introduce: function () {
        console.log(
            "My name is " +
            this.name +
            " and I work in the " +
            this.department +
            " department."
        );
    },
    checkSalary: function () {
        if (this.salary >= 300000) {
            console.log("Employee has a good salary.");
        } else {
            console.log("Employee has a low salary.");
        }
    }
};
employee.showInfo();
employee.introduce();
employee.checkSalary();