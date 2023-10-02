/*

Exercise 2: Calculate the Area of a Rectangle
Create a function named `calculateRectangleArea` that takes the length and width of a
rectangle as arguments and returns the area of the rectangle. Then, call the function with
different values.

*/

// Function to get rectangle area
const calculateRectangleArea = (length, width) => {
    return length * width;
}

// Tests for the function [calculateRectangleArea]
for(let i = 0; i < 3; i++) {
    console.log(calculateRectangleArea(Math.random() * 100, Math.random * 100));
}