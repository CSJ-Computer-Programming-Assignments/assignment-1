/*

Exercise: Eligibility Checker
    Objective: Create a program that checks a person's age and determines if they are eligible to
    vote.

Instructions:
    1. Define a constant `age` with a numerical value representing a person's age. For
    example, you can set `const age = 18;` to represent a person who is 18 years old.
    2. Use a ternary operator to check the person's age and assign a message to a variable
    `message`. If the person is 18 or older, the message should say "You are eligible to
    vote." Otherwise, the message should say "You are not eligible to vote."
    3. Display the `message` to the user.

Requirements:
    ● Use a ternary operator to determine the eligibility message based on the person's age.
    ● Ensure that the predefined `age` is a valid non-negative number.
    ● Display the eligibility message to the user.

Sample Output:
    Eligibility Checker
    Age: 18
    Message: You are eligible to vote.

*/

// Definining agefea
const age = 18;

// Printing the message with ternary operator
console.log(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.")