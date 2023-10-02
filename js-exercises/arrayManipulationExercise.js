/*

Array Manipulation Exercises:

1. Adding and Removing Elements:
a. Start by creating an array called `fruits` with some initial fruit names.
b. To add a new fruit to the end of the array, use the `push` method. For example,
`fruits.push("orange");`.
c. To remove the last fruit from the array, use the `pop` method. For example,
`fruits.pop();`.
d. After each operation, you can use `console.log(fruits);` to display the updated
array.

2. Array Length:
a. Create an array called `colors` with some color names.
b. To find the number of elements in the array, use the `length` property. For
example, `const numberOfColors = colors.length;`.
c. Display the result using `console.log(numberOfColors);`.

3. Accessing Elements by Index:
a. Create an array called `daysOfWeek` with the days of the week.
b. To access a specific day, use the index. Remember that array indices start
from 0. For example, to access Wednesday (the third day), use
`daysOfWeek[2]`.
c. Display the result using `console.log()`.

4. Stack Operations:
a. Start with an empty array to represent the stack.
b. Use the `push` method to add elements to the stack. For example,
`stack.push(1);`.
c. Use the `pop` method to remove elements from the stack. For example, `const
removedElement = stack.pop();`.
d. Perform a series of push and pop operations and display the stack at each step
using `console.log(stack);`.

5. Reversing an Array:
a. Create an array of elements (e.g., numbers, strings, or a mix of data types).
b. Use the `reverse()` method on the array to reverse the order of its elements.
c. Display the reversed array using `console.log()`.

*/

// 1. Adding and removing elements:

const addingAndRemovingElements = () => {
    const fruits = ["Orange", "Apple", "Banana"];
    console.log(fruits);

    fruits.push("Berry");
    console.log(fruits);

    fruits.pop();
    console.log(fruits);
}

// 2. Array Length:

const arrayLength = () => {
    const colors = ["Pink", "Red", "Blue"];
    const numberOfColors = colors.length;
    console.log(numberOfColors);
}

// 3. Accessing Elements by Index:

const accessingElementsByIndex = () => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const wednsday = daysOfWeek[2];
    console.log(wednsday);
}

// 4. Stack Operations:

const stackOperations = () => {
    const stack = [];

    stack.push(1);
    const removedElement = stack.pop();
    console.log(`Pushed, and removed element was ${removedElement}`);
    console.log(stack);

    stack.push("Czesc");
    const removedElement2 = stack.pop();
    console.log(`Pushed, and removed element was ${removedElement}`);
    console.log(stack);

    stack.push("Part");
    const removedElement3 = stack.pop();
    console.log(`Pushed, and removed element was ${removedElement}`);
    console.log(stack);

    stack.push(2.334234234);
    const removedElement4 = stack.pop();
    console.log(`Pushed, and removed element was ${removedElement}`);
    console.log(stack);
}

// 5. Reversing an Array:

const reversingAnArray = () => {
    const funnyNumbers = [1, 3, 5, 7, 9];
    const reversedItems = funnyNumbers.reverse();
    console.log(reversedItems);
}