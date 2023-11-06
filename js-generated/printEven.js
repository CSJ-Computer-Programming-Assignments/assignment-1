"use strict";
/*

Write a JS code to print Even numbers in given array
a. Function `printEven()` prints all the even numbers of a 2D array using for loops
and ‘%’ operator.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const printEven = numbers => {
    let evenNumbers = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
};
var arr = [13, 23, 12, 45, 22, 48, 66, 100];
console.log(printEven(arr));
exports.default = printEven;
