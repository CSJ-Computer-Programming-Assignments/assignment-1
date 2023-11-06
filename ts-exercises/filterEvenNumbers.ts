/*

Exercise 2: Filter Even Numbers

Description:
Create a function that filters out even numbers from an array using the `.filter()` method.
Guidance:
- Create a function that takes an array as its parameter.
- Use the `.filter()` method to create a new array containing only the even numbers.
- Inside the filter callback function, return `true` for even numbers and `false` for odd ones.

*/

type filterEvenNumbersType = (numbers: number[]) => number[];

const filterEvenNumbers: filterEvenNumbersType = numbers => {
    return numbers.filter(number => number % 2 === 0);
}

export default filterEvenNumbers;