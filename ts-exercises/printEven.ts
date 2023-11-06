/*

Write a JS code to print Even numbers in given array
a. Function `printEven()` prints all the even numbers of a 2D array using for loops
and ‘%’ operator.

*/

type printEvenType = (numbers: number[]) => number[];

const printEven: printEvenType = numbers => {
    let evenNumbers: number[] = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    return evenNumbers;
}

var arr = [13,23,12,45,22,48,66,100]
console.log(printEven(arr));

export default printEven;