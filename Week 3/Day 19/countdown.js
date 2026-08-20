let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an event year: ", function (year) {

    rl.question("Enter an event month: ", function (month) {

        rl.question("Enter an event day: ", function (day) {

            let eventDate = new Date(
                Number(year),
                Number(month) - 1,
                Number(day)
            );

            let today = new Date();

            console.log(`Event Date: ${eventDate.toDateString()}`);

            // Check if event is today
            if (
                eventDate.getFullYear() === today.getFullYear() &&
                eventDate.getMonth() === today.getMonth() &&
                eventDate.getDate() === today.getDate()
            ) {
                console.log("The event is today! 🎉");
            }

            // Event has already passed
            else if (eventDate < today) {
                console.log("The event date has already passed.");
            }

            // Event is in the future
            else {
                let diffInMilliseconds = eventDate - today;

                let diffInDays = Math.ceil(
                    diffInMilliseconds / (1000 * 60 * 60 * 24)
                );

                console.log(`Days remaining: ${diffInDays}`);
            }

            rl.close();
        });
    });
});