"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates_1 = __importDefault(require("../removeDuplicates"));
test("Test for [hello, world, HELLO, Hello, hello]", () => {
    expect((0, removeDuplicates_1.default)(["hello", "world", "HELLO", "Hello", "hello"])).toStrictEqual(["hello", "world", "HELLO", "Hello"]);
});
test("Test for [world, World, world]", () => {
    expect((0, removeDuplicates_1.default)(["world", "World"])).toStrictEqual(["world", "World"]);
});
test('Test for [1, "1"]', () => {
    expect((0, removeDuplicates_1.default)([1, '1'])).toStrictEqual([1, '1']);
});
