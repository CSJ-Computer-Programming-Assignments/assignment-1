"use strict";
/*

Exercise 1: Sum of Array Elements

Description: Write a function that calculates the sum of all elements in an array using the
`.reduce()` method.
Guidance:
- Define a function that takes an array as its argument.
- Use the `.reduce()` method to iterate through the array and calculate the sum of all elements.
- Make sure to provide an initial value to the `.reduce()` method to start the summation
properly.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const sumOfAllElements = elements => {
    return elements.reduce((a, b) => a + b, 0);
};
exports.default = sumOfAllElements;
