const capitalize = require('./capitalize.js');
const strings = ['[', '0', 'abcdefghijk', ',', 'helloWORLD', 'AAAAAAAA', 'CaseTesting', 'xD'];


describe.each(strings)(`check if string's first character will be capitalized`, (string) => {
  test('check if first letter is capitalized', () => {
    expect(capitalize(string)[0]).toBe(string[0].toUpperCase());
  });
});