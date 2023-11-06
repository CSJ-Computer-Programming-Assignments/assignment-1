"use strict";
/*

Exercise 3: Find the Longest Word

Description:
Write a function that finds the longest word in an array of strings using the `.reduce()` method.
Guidance:
- Write a function that accepts an array of strings as an argument.
- Utilize the `.reduce()` method to find the longest word.
- Inside the `.reduce()` callback, compare word lengths to determine the longest one.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const findLongestWord = words => {
    return words.reduce((a, b) => a.length > b.length ? a : b, "");
};
exports.default = findLongestWord;
