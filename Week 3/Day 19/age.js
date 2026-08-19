const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your birth year: ", function(birthYear) {

    rl.question("Enter your birth month: ", function(birthMonth) {

        rl.question("Enter your birth day: ", function(birthDay) {

            birthYear = Number(birthYear);
            birthMonth = Number(birthMonth);
            birthDay = Number(birthDay);

            let today = new Date();

            // Birth Date
            let birthDate = new Date(
                birthYear,
                birthMonth - 1,
                birthDay
            );

            // =========================
            // AGE CALCULATOR
            // =========================

            let years = today.getFullYear() - birthYear;
            let months = today.getMonth() - (birthMonth - 1);
            let days = today.getDate() - birthDay;

            if (days < 0) {
                months--;

                let previousMonth = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    0
                );

                days += previousMonth.getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            console.log("\nYour Age:");
            console.log(`${years} years, ${months} months, ${days} days`);


            // =========================
            // NEXT BIRTHDAY
            // =========================

            let currentYear = today.getFullYear();

            let nextBirthday = new Date(
                currentYear,
                birthMonth - 1,
                birthDay
            );

            // If birthday has already passed
            if (nextBirthday < today) {
                nextBirthday.setFullYear(currentYear + 1);
            }

            let difference = nextBirthday - today;

            let daysRemaining = Math.ceil(
                difference / (1000 * 60 * 60 * 24)
            );

            console.log("\nNext Birthday:");
            console.log(nextBirthday.toDateString());

            if (
                today.getDate() === birthDay &&
                today.getMonth() === birthMonth - 1
            ) {
                console.log("🎉 Happy Birthday!");
                console.log("Your birthday is today!");
            } else {
                console.log(
                    `Your next birthday is in ${daysRemaining} days.`
                );
            }

            rl.close();
        });
    });
});