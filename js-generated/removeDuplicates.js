"use strict";
/*

Exercise 5: Remove Duplicates

Description:
Create a function that removes duplicate values from an array using the `.filter()` method.
Guidance:
- Create a function that takes an array as its argument.
- Implement the `.filter()` method to remove duplicate values from the array.
- Inside the `.filter()` callback, compare elements to identify duplicates.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = elements => {
    return elements.filter((element, index) => elements.indexOf(element) === index);
};
exports.default = removeDuplicates;
