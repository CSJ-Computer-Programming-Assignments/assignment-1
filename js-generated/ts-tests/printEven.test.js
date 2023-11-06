"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const printEven_1 = __importDefault(require("../printEven"));
test('Test for [11, 13, 16, 12, 12, 18, 101]', () => {
    expect((0, printEven_1.default)([11, 13, 16, 12, 12, 18, 101])).toStrictEqual([16, 12, 12, 18]);
});
test('Test for [2, 4, 6, 8]', () => {
    expect((0, printEven_1.default)([2, 4, 6, 8])).toStrictEqual([2, 4, 6, 8]);
});
test('Test for [11, 13, 15, 17]', () => {
    expect((0, printEven_1.default)([11, 13, 15, 17])).toStrictEqual([]);
});
test('Test for an empty array', () => {
    expect((0, printEven_1.default)([])).toStrictEqual([]);
});
test('Test for [-4, -6, -8, -10]', () => {
    expect((0, printEven_1.default)([-4, -6, -8, -10])).toStrictEqual([-4, -6, -8, -10]);
});
test('Test for [7, 2, 5, 8, 10, 14, 3]', () => {
    expect((0, printEven_1.default)([7, 2, 5, 8, 10, 14, 3])).toStrictEqual([2, 8, 10, 14]);
});
test('Test for [3]', () => {
    expect((0, printEven_1.default)([3])).toStrictEqual([]);
});
