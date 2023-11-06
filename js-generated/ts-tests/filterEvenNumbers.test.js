"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filterEvenNumbers_1 = __importDefault(require("../filterEvenNumbers"));
test('Test for [10, 2, 3, 8, 10]', () => {
    expect((0, filterEvenNumbers_1.default)([10, 2, 3, 5, 8, 10])).toStrictEqual([10, 2, 8, 10]);
});
test('Test for an empty array', () => {
    expect((0, filterEvenNumbers_1.default)([])).toStrictEqual([]);
});
test('Test for an array with only odd numbers [1, 3, 5, 7, 9]', () => {
    expect((0, filterEvenNumbers_1.default)([1, 3, 5, 7, 9])).toStrictEqual([]);
});
test('Test for an array with only even numbers [2, 4, 6, 8]', () => {
    expect((0, filterEvenNumbers_1.default)([2, 4, 6, 8])).toStrictEqual([2, 4, 6, 8]);
});
test('Test for an array with a single even number [6]', () => {
    expect((0, filterEvenNumbers_1.default)([6])).toStrictEqual([6]);
});
test('Test for an array with mixed even and odd numbers [7, 4, 9, 12, 3, 18]', () => {
    expect((0, filterEvenNumbers_1.default)([7, 4, 9, 12, 3, 18])).toStrictEqual([4, 12, 18]);
});
test('Test for an array with negative even numbers [-2, -4, -6, -8]', () => {
    expect((0, filterEvenNumbers_1.default)([-2, -4, -6, -8])).toStrictEqual([-2, -4, -6, -8]);
});
