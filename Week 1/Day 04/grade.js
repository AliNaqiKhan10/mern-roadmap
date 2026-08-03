let marks = 49;

if (marks >= 0 && marks <= 100) {
    if (marks >= 90) {
        console.log("Grade: A\nMarks: " + marks);
    }
    else if (marks >= 80) {
        console.log("Grade: B\nMarks: " + marks);
    }
    else if (marks >= 70) {
        console.log("Grade: C\nMarks: " + marks);
    }
    else if (marks >= 60) {
        console.log("Grade: D\nMarks: " + marks);
    }
    else if (marks >= 50) {
        console.log("Grade: D-\nMarks: " + marks);
    }
    else {
        console.log("Grade: F\nMarks: " + marks);
    }
}
else {
    console.log("Invalid marks. Please enter a value between 0 and 100.");
}