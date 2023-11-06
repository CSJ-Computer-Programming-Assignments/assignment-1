/*

Exercise 3: Convert Celsius to Fahrenheit
Write a function called `celsiusToFahrenheit` that takes a temperature in Celsius as an
argument and returns the equivalent temperature in Fahrenheit using the formula: `Fahrenheit
= (Celsius * 9/5) + 32`. Then, call the function with different Celsius temperatures.

*/

// Function to convert celsius to fahrenheit
const clesiusToFahreheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

// Tests for the function [celsiusToFahrenheit]
for(let i = 0; i < 3; i++) {
    console.log(clesiusToFahreheit(Math.random() * 100));
}

module.exports = clesiusToFahreheit;