let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

// 1. Add a new student to the end of the array
students.push("Frank");
console.log(students); // ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

// 2. Remove the last student from the array
students.pop();
console.log(students); // ["Alice", "Bob", "Charlie", "David", "Eve"]

// 3. Add a new student to the beginning of the array
students.unshift("Grace");
console.log(students); // ["Grace", "Alice", "Bob", "Charlie", "David", "Eve"]

// 4. Remove the first student from the array
students.shift();
console.log(students); // ["Alice", "Bob", "Charlie", "David", "Eve"]

// Slice syntax: array.slice(startIndex, endIndex)
// 5. Slice the array to get a subarray of students
let subArray = students.slice(1, 4);
console.log(subArray); // ["Bob", "Charlie", "David"]   

// 6. Negative slicing to get the last two students
let lastTwoStudents = students.slice(-2);
console.log(lastTwoStudents); // ["David", "Eve"]

// Splice syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// 7. Splice the array to remove a student
students.splice(2, 1);
console.log(students); // ["Alice", "Bob", "David", "Eve"]

// 8. Splice the array to add a new student at index 2
students.splice(2, 0, "Hannah");
console.log(students); // ["Alice", "Bob", "Hannah", "David", "Eve"]

// 9. Splice the array to replace a student at index 3
students.splice(3, 1, "Ian");
console.log(students); // ["Alice", "Bob", "Hannah", "Ian", "Eve"]