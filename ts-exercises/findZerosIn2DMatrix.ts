/*

4. Write a JS code to find the number of zeros in 2D Matrix
a. Program to find count number for zeros in 2d matrix using nested for loops
and increment operation.

*/

type findZerosIn2DMatrixType = (numbers: number[][]) => void;

/**
 * 
 * Returns the amount of zeros from the array
 * 
 * @param numbers provides 2D matrix map of numbers
 * 
 * @returns amount of zeros in the provided list of numbers
 */
const findZerosIn2DMatrix: findZerosIn2DMatrixType = numbers => {
    let zeros = 0;

    for(let i in numbers) {
        for(let j of numbers[i]) {
            if(j === 0) 
                zeros++;
        }
    }

    return zeros;
}

export default findZerosIn2DMatrix;