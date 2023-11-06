import findZerosIn2DMatrix from '../findZerosIn2DMatrix';

test('Test for [[0, 0, 1], [1, 1, 0], [0, 0, 1], [1, 1, 1]]', () => {
    expect(findZerosIn2DMatrix([[0, 0, 1], [1, 1, 0], [0, 0, 1], [1, 1, 1]])).toStrictEqual(5);
});

test('Test for an empty matrix', () => {
    expect(findZerosIn2DMatrix([])).toStrictEqual(0);
});

test('Test for a matrix with no zeros', () => {
    expect(findZerosIn2DMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual(0);
});

test('Test for a matrix with all zeros', () => {
    expect(findZerosIn2DMatrix([[0, 0], [0, 0], [0, 0]])).toStrictEqual(6);
});

test('Test for a matrix with a mix of zeros and non-zeros', () => {
    expect(findZerosIn2DMatrix([[1, 0, 2], [0, 3, 0], [4, 0, 5]])).toStrictEqual(4);
});