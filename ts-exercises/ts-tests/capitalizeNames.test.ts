import capitalizeNames from '../capitalizeNames';

test("Test for [warsaw, lisbon]", () => {
    expect(capitalizeNames(["warsaw", "lisbon"])).toStrictEqual(["Warsaw", "Lisbon"]);
});

test("Test for empty array", () => {
    expect(capitalizeNames([])).toStrictEqual([]);
});


test(`Test for ["", ""]`, () => {
    expect(capitalizeNames(["", ""])).toStrictEqual(["", ""]);
});

test(`Test for ["hello", "world"]`, () => {
    expect(capitalizeNames(["hello", "world"])).toStrictEqual(["Hello", "World"]);
});

test(`Test for ["apple", "potato", "pepper", "x", "bread"]`, () => {
    expect(capitalizeNames(["apple", "potato", "pepper", "x", "bread"])).toStrictEqual(["Apple", "Potato", "Pepper", "X", "Bread"]);
});