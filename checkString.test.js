const stringLength = require('./checkString');
const testStrings = ['','a','123123','12345678901','1234567890','helloworld','hello'];

describe.each(testStrings)('check the string length', (string) => {
  test('check if the string length follows the conditions', () => {
    expect(stringLength(string)).toBe(true);
  });
});