"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findZerosIn2DMatrix_1 = __importDefault(require("../findZerosIn2DMatrix"));
test('Test for [[0, 0, 1], [1, 1, 0], [0, 0, 1], [1, 1, 1]]', () => {
    expect((0, findZerosIn2DMatrix_1.default)([[0, 0, 1], [1, 1, 0], [0, 0, 1], [1, 1, 1]])).toStrictEqual(5);
});
test('Test for an empty matrix', () => {
    expect((0, findZerosIn2DMatrix_1.default)([])).toStrictEqual(0);
});
test('Test for a matrix with no zeros', () => {
    expect((0, findZerosIn2DMatrix_1.default)([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual(0);
});
test('Test for a matrix with all zeros', () => {
    expect((0, findZerosIn2DMatrix_1.default)([[0, 0], [0, 0], [0, 0]])).toStrictEqual(6);
});
test('Test for a matrix with a mix of zeros and non-zeros', () => {
    expect((0, findZerosIn2DMatrix_1.default)([[1, 0, 2], [0, 3, 0], [4, 0, 5]])).toStrictEqual(4);
});
