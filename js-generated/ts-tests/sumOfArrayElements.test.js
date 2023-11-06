"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sumOfArrayElements_1 = __importDefault(require("../sumOfArrayElements"));
test('Test for [10, 5, 10, 5]', () => {
    expect((0, sumOfArrayElements_1.default)([10, 5, 10, 5])).toStrictEqual(30);
});
test('Test for an empty array', () => {
    expect((0, sumOfArrayElements_1.default)([])).toStrictEqual(0);
});
test('Test for an array with a single element [7]', () => {
    expect((0, sumOfArrayElements_1.default)([7])).toStrictEqual(7);
});
test('Test for an array with all zeros [0, 0, 0, 0]', () => {
    expect((0, sumOfArrayElements_1.default)([0, 0, 0, 0])).toStrictEqual(0);
});
test('Test for an array with negative numbers [-3, -5, -2]', () => {
    expect((0, sumOfArrayElements_1.default)([-3, -5, -2])).toStrictEqual(-10);
});
test('Test for an array with mixed positive and negative numbers [4, -2, 8, -6]', () => {
    expect((0, sumOfArrayElements_1.default)([4, -2, 8, -6])).toStrictEqual(4);
});
test('Test for a large array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect((0, sumOfArrayElements_1.default)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual(55);
});
