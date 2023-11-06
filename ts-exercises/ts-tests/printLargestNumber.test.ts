import printLargestNumber from '../printLargestNumber';

test('Test for [11, 13, 16, 12, 12, 18, 101]', () => {
    expect(printLargestNumber([11, 13, 16, 12, 12, 18, 101])).toStrictEqual(101);
});

test('Test for an empty array', () => {
  expect(printLargestNumber([])).toBeUndefined();
});

test('Test for an array with a single element', () => {
  expect(printLargestNumber([42])).toStrictEqual(42);
});

test('Test for an array with negative numbers', () => {
  expect(printLargestNumber([-5, -1, -2, -8, -3])).toStrictEqual(-1);
});

test('Test for an array with multiple occurrences of the largest number', () => {
  expect(printLargestNumber([10, 20, 20, 10, 30, 30])).toStrictEqual(30);
});