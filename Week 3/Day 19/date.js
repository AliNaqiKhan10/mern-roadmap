// Get the current date and time
let today = new Date();
console.log(today);

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