/*

2. Write JavaScript code that accomplishes the following tasks:
    a. Declare a variable `myString` and assign it a string value of your choice.
    b. Calculate the length of `myString` and store it in a variable called `stringLength`.
    c. Declare two variables, `num1` and `num2`, and assign them numerical values.
    d. Calculate the remainder of `num1` divided by `num2` and store it in a variable
    called `remainder`.
    e. Use string interpolation to create a message that includes `myString` and
    `stringLength`. Log this message to the console.
    f. Determine if `num1` is an even number using a boolean variable called `isEven`.
    Log a message to the console indicating whether `num1` is even or not.
    g. Generate a random integer between 1 and 100 (inclusive) and store it in a
    variable called `randomNum`.
    h. Use an assignment operator to update the value of `num1` by adding 7 to it.
    i. Change the value of `myString` to `null`.
    j. After completing the coding tasks, add appropriate single-line and multi-line
    comments to explain your code at various points. Make sure to include
    comments that describe the purpose of variables, calculations, and any
    important logic.
    k. Run your JavaScript code and verify that it produces the expected output in the
    console.

*/


// Here I created my own string
let myString = "Hello World"

// Here I provide the length of my string
const stringLength = myString.length

// Here I created 2 different numbers and the remainder
let num1 = 200
const num2 = 12
const remainder = num1 / num2

// Here I print to the console the string I created and its length
console.log(`The length of ${myString} is ${stringLength}.`)


// In this variable i store whether the number is even or not
const isEven = num1.isEven

// This line prints to the console the answer whether the num1 is even or not
console.log(`${num1} is ${isEven ? "even" : "is not even"}`)

// Here we are storing a random number
const randomNum = Math.random() * 100

// In this line of code we add 7 to the existing num1 variable
num1 += 7

// Here we are reseting myString variable to null
myString = null