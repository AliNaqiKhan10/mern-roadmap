const grade = (score) => {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
};

const isPassed = (score) => {
    if (score >= 60) {
        return "passed";
    } else {
        return "failed";
    }
};
 const studentResult = (name, score) => {
    const studentGrade = grade(score);
    const passed = isPassed(score);
    console.log("Student Name: " + name);
    console.log("Score: " + score);
    console.log("Grade: " + studentGrade);
    console.log("Result: " + passed);
    console.log("-----------------------------");
}
studentResult("John", 85); // John has passed with a grade of B.
studentResult("Alice", 55); // Alice has failed with a grade of F.
