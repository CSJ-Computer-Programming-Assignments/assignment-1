import printEven from "../printEven";

test('Test for [11, 13, 16, 12, 12, 18, 101]', () => {
  expect(printEven([11, 13, 16, 12, 12, 18, 101])).toStrictEqual([16, 12, 12, 18]);
});

test('Test for [2, 4, 6, 8]', () => {
  expect(printEven([2, 4, 6, 8])).toStrictEqual([2, 4, 6, 8]);
});

test('Test for [11, 13, 15, 17]', () => {
  expect(printEven([11, 13, 15, 17])).toStrictEqual([]);
});

test('Test for an empty array', () => {
  expect(printEven([])).toStrictEqual([]);
});

test('Test for [-4, -6, -8, -10]', () => {
  expect(printEven([-4, -6, -8, -10])).toStrictEqual([-4, -6, -8, -10]);
});


test('Test for [7, 2, 5, 8, 10, 14, 3]', () => {
  expect(printEven([7, 2, 5, 8, 10, 14, 3])).toStrictEqual([2, 8, 10, 14]);
});


test('Test for [3]', () => {
  expect(printEven([3])).toStrictEqual([]);
});