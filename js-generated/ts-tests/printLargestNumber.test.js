"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const printLargestNumber_1 = __importDefault(require("../printLargestNumber"));
test('Test for [11, 13, 16, 12, 12, 18, 101]', () => {
    expect((0, printLargestNumber_1.default)([11, 13, 16, 12, 12, 18, 101])).toStrictEqual(101);
});
test('Test for an empty array', () => {
    expect((0, printLargestNumber_1.default)([])).toBeUndefined();
});
test('Test for an array with a single element', () => {
    expect((0, printLargestNumber_1.default)([42])).toStrictEqual(42);
});
test('Test for an array with negative numbers', () => {
    expect((0, printLargestNumber_1.default)([-5, -1, -2, -8, -3])).toStrictEqual(-1);
});
test('Test for an array with multiple occurrences of the largest number', () => {
    expect((0, printLargestNumber_1.default)([10, 20, 20, 10, 30, 30])).toStrictEqual(30);
});
