// Get the current date and time
let today = new Date();
console.log(today);
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());

// Get the current year, month, and day
let year = today.getFullYear();
let month = today.getMonth() + 1; // Months are zero-based, so we add 1
let day = today.getDate();
let weekday = today.getDay(); // 0 (Sunday) to 6 (Saturday)
console.log(`Year: ${year}, Month: ${month}, Day: ${day}, Weekday: ${weekday}`);

// Get the current hours, minutes, and seconds
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
console.log(`Time: ${hours}:${minutes}:${seconds}`);

// Create a specific date 
let birthday = new Date(2003, 11, 20);
console.log(birthday);

// Compare two dates
let date1 = new Date(2024, 0, 1);
let date2 = new Date(2024, 10, 31);
if (date1 < date2) {
    console.log(`${date1.toDateString()} is before ${date2.toDateString()}`);
}
else {
    console.log(`${date1.toDateString()} is after ${date2.toDateString()}`);
}

// Calculate the difference between two dates
let diffInMilliseconds = date2 - date1;
let diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
console.log(`Difference between ${date1.toDateString()} and ${date2.toDateString()} is ${diffInDays} days.`);