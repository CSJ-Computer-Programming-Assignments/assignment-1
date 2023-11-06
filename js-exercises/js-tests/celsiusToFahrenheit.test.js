const clesiusToFahreheit = require('./js-exercises/clasiusToFahreheit.js');

test('Check for numbers', () => {
  expect(clesiusToFahreheit(10)).toBe(3);
});