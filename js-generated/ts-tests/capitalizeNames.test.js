"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalizeNames_1 = __importDefault(require("../capitalizeNames"));
test("Test for [warsaw, lisbon]", () => {
    expect((0, capitalizeNames_1.default)(["warsaw", "lisbon"])).toStrictEqual(["Warsaw", "Lisbon"]);
});
test("Test for empty array", () => {
    expect((0, capitalizeNames_1.default)([])).toStrictEqual([]);
});
test(`Test for ["", ""]`, () => {
    expect((0, capitalizeNames_1.default)(["", ""])).toStrictEqual(["", ""]);
});
test(`Test for ["hello", "world"]`, () => {
    expect((0, capitalizeNames_1.default)(["hello", "world"])).toStrictEqual(["Hello", "World"]);
});
test(`Test for ["apple", "potato", "pepper", "x", "bread"]`, () => {
    expect((0, capitalizeNames_1.default)(["apple", "potato", "pepper", "x", "bread"])).toStrictEqual(["Apple", "Potato", "Pepper", "X", "Bread"]);
});
