let students = ["Ali", "Ahmed", "Usman", "Hamza", "Bilal"];
console.log("Students: " + students);
console.log("First Student: " + students[0]);
console.log("Second Student: " + students[1]);
console.log("Last Student: " + students[students.length - 1]);
console.log("Total Students: " + students.length);

// Push adds an element to the end of the array, while pop removes the last element from the array.
// students.push("Zain");
// console.log("Students after adding Zain: " + students);

// students.pop();
// console.log("Students after removing last student: " + students);

// students[2] = "Zain";
// console.log("Students after changing Usman to Zain: " + students);

// Unshift adds an element to the beginning of the array, while shift removes the first element from the array.
students.unshift("Zain");
console.log("Students after adding Zain at the beginning: " + students);

students.shift();
console.log("Students after removing the first student: " + students);