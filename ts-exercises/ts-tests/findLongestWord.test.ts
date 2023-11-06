import findLongestWord from '../findLongestWord';

test('Test for [10, 2, 3, 8, 10]', () => {
    expect(findLongestWord(["word", "longer"])).toStrictEqual("longer");
});

test('Test for Empty Array', () => {
    expect(findLongestWord([])).toStrictEqual("");
});

test('Test for an array with multiple words of the same length ["apple", "banana", "cherry", "date"]', () => {
    expect(findLongestWord(["apple", "banana", "cherry", "date"])).toStrictEqual("cherry");
});

test('Test for an array with a single word ["elephant"]', () => {
    expect(findLongestWord(["elephant"])).toStrictEqual("elephant");
});

test('Test for an array with words of varying lengths ["cat", "dog", "parrot", "giraffe"]', () => {
    expect(findLongestWord(["cat", "dog", "parrot", "giraffe"])).toStrictEqual("giraffe");
});

test('Test for an array with special characters and spaces ["@#$$$", "   ", "####@", "word with spaces"]', () => {
    expect(findLongestWord(["@#$$$", "   ", "####@", "word with spaces"])).toStrictEqual("word with spaces");
});

test('Test for an array with words containing numbers ["apple12", "banana3", "cherry456", "date7"]', () => {
    expect(findLongestWord(["apple12", "banana3", "cherry456", "date7"])).toStrictEqual("cherry456");
});
