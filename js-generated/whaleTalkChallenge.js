"use strict";
/*

Whale Talk Challenge
You are tasked with creating a JavaScript program to translate a given phrase into "Whale
Talk." In Whale Talk, you remove all consonants except for 't' and 's,' and double all the vowels.
Your program should take a phrase and output the translated Whale Talk.
Here's what you need to do:
    1. Create a function called `translateToWhaleTalk` that takes a phrase as its input.
    2. Inside the function, convert the phrase to lowercase for consistency.
    3. Initialize an empty string called `whaleTalk` to store the translated Whale Talk.
    4. Use a loop to iterate through each character in the phrase.
    5. For each character, check if it is a vowel ('a', 'e', 'i', 'o', 'u'), or if it's 't' or 's'.
    6. If it's a vowel, double it (add it twice to the `whaleTalk` string).
    7. If it's 't' or 's', add it to the `whaleTalk` string.
    8. Finally, return the `whaleTalk` string.

Here's an example of how the function should be used:
    const translatedPhrase = translateToWhaleTalk("Hello, JavaScript!");
    console.log(translatedPhrase); // Output: "eeo, aasScrript!"

Your Challenge:
Write the `translateToWhaleTalk` function as described above. Then, test your function with
different phrases to ensure it works correctly. Make sure it handles uppercase letters and
spaces appropriately.

*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Translates the phrase to the whale language
 *
 * @param phase inputs the phrase to be transalted
 *
 * @returns translated phrase
 *
 */
const translateToWhaleTalk = phrase => {
    const lowerCasePhrase = phrase.toLowerCase();
    let whaleTalk = "";
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let letter of lowerCasePhrase) {
        if (vowels.includes(letter)) {
            whaleTalk += letter + letter;
        }
        if (letter === "t" || letter === "s" || letter === " ") {
            whaleTalk += letter;
        }
    }
    return whaleTalk;
};
console.log(translateToWhaleTalk("hello"));
exports.default = translateToWhaleTalk;
