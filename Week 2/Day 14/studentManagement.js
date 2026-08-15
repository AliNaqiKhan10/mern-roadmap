const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = ["Ali", "Ahmed", "Usman"];

// View all students
function viewStudents() {
    console.log("\n--- Students ---");

    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    for (let i = 0; i < students.length; i++) {
        console.log(`${i + 1}. ${students[i]}`);
    }
}

// Add a student
function addStudent() {
    rl.question("Enter student name: ", (name) => {

        if (name.trim() === "") {
            console.log("Student name cannot be empty.");
        } else {
            students.push(name.trim());
            console.log(`${name.trim()} added successfully.`);
        }

        showMenu();
    });
}

// Remove a student
function removeStudent() {
    if (students.length === 0) {
        console.log("\nNo students available to remove.");
        showMenu();
        return;
    }

    viewStudents();

    rl.question("Enter student number to remove: ", (answer) => {

        const index = parseInt(answer) - 1;

        if (index >= 0 && index < students.length) {

            const removedStudent = students.splice(index, 1);

            console.log(
                `${removedStudent[0]} removed successfully.`
            );

        } else {
            console.log("Invalid student number.");
        }

        showMenu();
    });
}

// Update a student
function updateStudent() {
    if (students.length === 0) {
        console.log("\nNo students available to update.");
        showMenu();
        return;
    }

    viewStudents();

    rl.question("Enter student number to update: ", (answer) => {

        const index = parseInt(answer) - 1;

        if (index >= 0 && index < students.length) {

            rl.question("Enter new student name: ", (newName) => {

                if (newName.trim() === "") {
                    console.log("Student name cannot be empty.");
                } else {

                    const oldName = students[index];

                    students[index] = newName.trim();

                    console.log(
                        `${oldName} updated to ${students[index]} successfully.`
                    );
                }

                showMenu();
            });

        } else {
            console.log("Invalid student number.");
            showMenu();
        }
    });
}

// Search for a student
function searchStudent() {
    rl.question("Enter student name to search: ", (name) => {

        let found = false;

        for (let i = 0; i < students.length; i++) {

            if (
                students[i].toLowerCase() ===
                name.trim().toLowerCase()
            ) {

                console.log(
                    `Student found at position ${i + 1}.`
                );

                found = true;
                break;
            }
        }

        if (!found) {
            console.log("Student not found.");
        }

        showMenu();
    });
}

// Main menu
function showMenu() {

    console.log("\n================================");
    console.log("   Student Management System");
    console.log("================================");

    console.log("1. View Students");
    console.log("2. Add Student");
    console.log("3. Remove Student");
    console.log("4. Update Student");
    console.log("5. Search Student");
    console.log("6. Exit");

    rl.question("\nEnter your choice: ", (answer) => {

        const choice = parseInt(answer);

        switch (choice) {

            case 1:
                viewStudents();
                showMenu();
                break;

            case 2:
                addStudent();
                break;

            case 3:
                removeStudent();
                break;

            case 4:
                updateStudent();
                break;

            case 5:
                searchStudent();
                break;

            case 6:
                console.log("\nGoodbye! 👋");
                rl.close();
                break;

            default:
                console.log("\nInvalid choice. Please try again.");
                showMenu();
        }
    });
}

// Start program
showMenu();