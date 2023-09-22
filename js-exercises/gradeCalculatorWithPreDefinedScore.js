/*

Exercise: Grade Calculator with Predefined Score

Objective: Create a program that calculates and displays a student's letter grade based on a
    predefined numerical score.

Instructions:
    1. Define a constant `score` with a numerical value representing a student's test score.
    For example, you can set `const score = 87;`.
    2. Calculate the letter grade using the following grading scale:
    a. A: 90-100
    b. B: 80-89
    c. C: 70-79
    d. D: 60-69
    e. F: Below 60
    3. Display the calculated letter grade for the predefined score.

Requirements:
    ● Use if-else statements to determine the letter grade based on the predefined score.
    ● Ensure that the predefined `score` is within the valid range (0-100).

Sample Output:
    Grade Calculator
    The letter grade for a score of 87 is B.
*/

console.log("Grade Calculator");

// Example score for a student
const score = 70;
let resultGrade;


/*
Grades are defined by the number higher by 1. In essence:
Grade F is going to be given to the students who scored below 60
Grade D is going to be given to the students who scored below 70
*/
const F = 60; // < 60
const D = 70; // 60 - 69
const C = 80; // 70 - 79
const B = 90; // 80 - 89
const A = 101; // 90 - 100

if(score < F) {
    resultGrade = "F";
} else if(score < D){
    resultGrade = "D";
} else if(score < C) {
    resultGrade = "C";
} else if (score < B) {
    resultGrade = "B";
} else if(score < A) {
    resultGrade = "A";
} else {
    resultGrade = "Undefined grade";
}

console.log(`The letter grade for a score of ${score} is ${resultGrade}`);