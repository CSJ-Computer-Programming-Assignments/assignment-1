"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findLongestWord_1 = __importDefault(require("../findLongestWord"));
test('Test for [10, 2, 3, 8, 10]', () => {
    expect((0, findLongestWord_1.default)(["word", "longer"])).toStrictEqual("longer");
});
test('Test for Empty Array', () => {
    expect((0, findLongestWord_1.default)([])).toStrictEqual("");
});
test('Test for an array with multiple words of the same length ["apple", "banana", "cherry", "date"]', () => {
    expect((0, findLongestWord_1.default)(["apple", "banana", "cherry", "date"])).toStrictEqual("cherry");
});
test('Test for an array with a single word ["elephant"]', () => {
    expect((0, findLongestWord_1.default)(["elephant"])).toStrictEqual("elephant");
});
test('Test for an array with words of varying lengths ["cat", "dog", "parrot", "giraffe"]', () => {
    expect((0, findLongestWord_1.default)(["cat", "dog", "parrot", "giraffe"])).toStrictEqual("giraffe");
});
test('Test for an array with special characters and spaces ["@#$$$", "   ", "####@", "word with spaces"]', () => {
    expect((0, findLongestWord_1.default)(["@#$$$", "   ", "####@", "word with spaces"])).toStrictEqual("word with spaces");
});
test('Test for an array with words containing numbers ["apple12", "banana3", "cherry456", "date7"]', () => {
    expect((0, findLongestWord_1.default)(["apple12", "banana3", "cherry456", "date7"])).toStrictEqual("cherry456");
});
