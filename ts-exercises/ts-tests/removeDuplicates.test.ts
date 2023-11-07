import removeDuplicates from '../removeDuplicates';

test("Test for [hello, world, HELLO, Hello, hello]", () => {
    expect(removeDuplicates(["hello", "world", "HELLO", "Hello", "hello"])).toStrictEqual(["hello", "world", "HELLO", "Hello"]);
});

test("Test for [world, World, world]", () => {
    expect(removeDuplicates(["world", "World"])).toStrictEqual(["world", "World"]);
});

test('Test for [1, "1"]', () => {
    expect(removeDuplicates([1, '1'])).toStrictEqual([1, '1']);
});