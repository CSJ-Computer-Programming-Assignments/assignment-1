/*

Exercise: Variable Scopes and Functions
Create a JavaScript program that demonstrates various aspects of variable scopes and
functions. Follow these steps:
1. Declare a global variable called `globalVar` with a value of `"I am a global variable"`.
2. Create a function called `functionScopeExample`. Inside this function:

a. Declare a variable called `functionVar` with a value of `"I am a function-scoped
variable"`.
b. Display the values of `globalVar` and `functionVar` using `console.log()`.

3. Create another function called `blockScopeExample`. Inside this function:

c. Use the `let` keyword to declare a variable called `blockVar` with a value of `"I
am a block-scoped variable"`.
d. Display the value of `blockVar` using `console.log()`.
e. Attempt to display the values of `globalVar` and `functionVar` within this
function. Note the results.

4. Call the `functionScopeExample` function and observe the output.
5. Call the `blockScopeExample` function and observe the output. Pay attention to variable
accessibility.
6. Outside of any functions, try to display the values of `globalVar`, `functionVar`, and
`blockVar`. Note the results.
7. Add comments to explain what each part of your code does.
Test and run your program to understand how variable scopes work in different situations.
Experiment with different variable types (global, function-scoped, and block-scoped) to see
how they behave.

*/

const globalVar = "I am a global variable";

const functionScopeExample = () => {
    const functionVar = "I am a function-scoped variable";

    console.log(globalVar);
    console.log(functionVar);
}

const blockScopeExample = () => {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar);
    console.log(globalVar);
    console.log(functionVar);
}

/*
    FUNCTION SCOPE EXAMPLE (OBSERVATION):
    The function printed to the console the globalVar and functionVar without any problems
*/
//functionScopeExample();

/*
    BLOCK SCOPE EXAMPLE (OBSERVATION):
    The function without any problems logged blockVar and globalVar, however we got an error with functionVar
    Because of the fact that function var is defined within the other function, we cannot call it.
*/
//blockScopeExample();

// We can easiely call global var, because it is not defined in any specific scope. It is global.
//console.log(globalVar);

// We can't print functionVar because it is within the other functions scope
// console.log(functionVar);

// We can't print blockVar because it is within the other functions scope
// console.log(blockVar);