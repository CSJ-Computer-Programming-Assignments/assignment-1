"use strict";
/*

3. Write a JS code to find the largest number in an array
a. Program to find the largest number in the given 1D array.

*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Returns the largest number of the array
 *
 * @param numbers provides the list of numbers loop will go through to find the biggest number
 *
 * @returns largest number of the first parameter
 */
const printLargestNumber = numbers => {
    let lNumber = numbers.length < 1 ? undefined : numbers[0];
    if (lNumber !== undefined) {
        for (let num of numbers) {
            if (num > lNumber)
                lNumber = num;
        }
    }
    return lNumber;
};
const nums = [2, 45, 3, 67, 34, 567, 34, 345, 123];
console.log(printLargestNumber(nums));
exports.default = printLargestNumber;
