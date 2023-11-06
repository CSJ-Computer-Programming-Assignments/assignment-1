import translateToWhaleTalk from "../whaleTalkChallenge";

test('Test for [hello]', () => {
    expect(translateToWhaleTalk("hello")).toStrictEqual("eeoo");
});

test('Test for an empty string', () => {
    expect(translateToWhaleTalk("")).toStrictEqual("");
});

test('Test for a string with no vowels', () => {
    expect(translateToWhaleTalk("xyz")).toStrictEqual("");
});

test('Test for a string with only vowels', () => {
    expect(translateToWhaleTalk("aeiou")).toStrictEqual("aaeeiioouu");
});

test('Test for a string with consonants and spaces', () => {
    expect(translateToWhaleTalk("test this")).toStrictEqual("teest tiis");
});


test('Test for a mixed case string', () => {
    expect(translateToWhaleTalk("Hello World")).toStrictEqual("eeoo oo");
});
