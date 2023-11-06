"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whaleTalkChallenge_1 = __importDefault(require("../whaleTalkChallenge"));
test('Test for [hello]', () => {
    expect((0, whaleTalkChallenge_1.default)("hello")).toStrictEqual("eeoo");
});
test('Test for an empty string', () => {
    expect((0, whaleTalkChallenge_1.default)("")).toStrictEqual("");
});
test('Test for a string with no vowels', () => {
    expect((0, whaleTalkChallenge_1.default)("xyz")).toStrictEqual("");
});
test('Test for a string with only vowels', () => {
    expect((0, whaleTalkChallenge_1.default)("aeiou")).toStrictEqual("aaeeiioouu");
});
test('Test for a string with consonants and spaces', () => {
    expect((0, whaleTalkChallenge_1.default)("test this")).toStrictEqual("teest tiis");
});
test('Test for a mixed case string', () => {
    expect((0, whaleTalkChallenge_1.default)("Hello World")).toStrictEqual("eeoo oo");
});
