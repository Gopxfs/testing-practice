const reverseString = require('./reverseString.js');

test('check reversedString', () => {
  expect(reverseString('abc')).toBe('cba');
});
test('check reversedString', () => {
  expect(reverseString('abcdefgh')).toBe('hgfedcba');
});
test('check reversedString', () => {
  expect(reverseString('123')).toBe('321');
});
test('check reversedString', () => {
  expect(reverseString('a')).toBe('a');
});
test('check reversedString', () => {
  expect(reverseString('')).toBe('');
});
test('check reversedString', () => {
  expect(reverseString('a')).toBe('b');
});