/*

Exercise 4: Capitalize Names

Description:
Implement a function that capitalizes the first letter of each name in an array of names using
the `.map()` method.
Guidance:
- Define a function that takes an array of names as its parameter.
- Apply the `.map()` method to capitalize the first letter of each name.
- Use the `.toUpperCase()` and `.slice()` methods to manipulate the names.

*/

type capitalizeNamesType = (names: string[]) => string[];

const capitalizeNames: capitalizeNamesType = names => {
    return names.map((name) => name.length < 1 ? "" : name[0].toUpperCase() + name.slice(1));
}

export default capitalizeNames;