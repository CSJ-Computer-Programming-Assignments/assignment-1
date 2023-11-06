"use strict";
/*

1. Write a JS code to print numbers from 1 to 10
a. Function `printNumbers()` prints numbers from 1 to 10 using for loop.

*/
const printNumbers = () => {
    let numbers = [];
    for (let i = 1; i <= 10; i++) {
        numbers.push(i);
    }
    console.group(...numbers);
};
printNumbers();
