/*

Exercise: Menu Selector
Objective: Create a program that simulates a menu selector, allowing the user to choose an
option from a predefined menu and displaying the corresponding action.

*/

const betterWay = false;

console.log("Menu Selector");

const menuChoice = 1;
console.log(`Selected Option ${menuChoice}`);

if (!betterWay) {
    const option1 = "View Profile";
    const option2 = "Edit Settings";
    const option3 = "Log Out";

    switch (menuChoice) {
        case 1:
            console.log(`Action: ${option1}`);
            break;
        case 2:
            console.log(`Action: ${option2}`);
            break;
        case 3:
            console.log(`Action: ${option3}`);
            break;

        default:
            console.log("Invalid option");
            break;
    }
} else {
    const options = {
        1: "View Profile",
        2: "Edit Settings",
        3: "Log Out",
    }

    options[menuChoice] === undefined ? console.log("Invalid option") : console.log(options[menuChoice])
}