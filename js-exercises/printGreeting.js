/*

Exercise 1: Print a Greeting
Write a function called `printGreeting` that takes a person's name as an argument and prints a
greeting message to the console. For example, if the name is "Alice," the function should print
"Hello, Alice!"

*/

// Function that prints to the console "Hello, [name]"
const greeting = (name) => {
    console.log(`Hello, ${name}`);
}

// Test of the function [greeting]
greeting("Alice");