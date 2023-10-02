/*

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.

*/

// Function that calculates the "Lifetime supply"
function calculateSupply (age, amount) {
    return `You will need ${Math.round(amount * age)}, to last you until the ripe old age of ${age}`;
}

// Test 3 times by creating a loop
for(let i = 0; i < 3; i++) {
    // Get the random age between 1 to 60
    const randomAge = Math.floor((Math.random() * (60) + 1));

    // Get the random amount of favorite snack between 100 to 1000
    const randomAmount = Math.floor((Math.random() * (1000 - 100 + 1) + 1));

    console.log(calculateSupply(randomAge, randomAmount));
}