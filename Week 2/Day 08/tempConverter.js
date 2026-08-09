function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
let celsius = 0;
let fahrenheit = 32;
console.log("Celsius " + celsius + " to Fahrenheit= " + celsiusToFahrenheit(celsius));
console.log("Fahrenheit " + fahrenheit + " to Celsius= " + fahrenheitToCelsius(fahrenheit));