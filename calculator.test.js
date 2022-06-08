const Calculator = require('./calculator.js');
const calculator = new Calculator();

describe('add', () => {
  test('adding two numbers', () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.add(375,512)).toBe(887);
    expect(calculator.add(-258, 55)).toBe(-203);
  });
});

describe('subtract', () => {
  test('subtracting two numbers', () => {
    expect(calculator.subtract(77,77)).toBe(0);
    expect(calculator.subtract(1059, 1000)).toBe(59);
    expect(calculator.subtract(1, 4021)).toBe(-4020);
  });
});

describe('divide', () => {
  test('dividing two numbers', () => {
    expect(calculator.divide(15,5)).toBe(3);
    expect(calculator.divide(333,111)).toBe(3);
    expect(calculator.divide(738,246)).toBe(3);
  });  
});

describe('multiply', () => {
  test('multipling two numbers', () => {
    expect(calculator.multiply(0, 218949219)).toBe(0);
    expect(calculator.multiply(84, 100)).toBe(8400);
    expect(calculator.multiply(-15, 5)).toBe(-75);
    expect(calculator.multiply(-15, -2)).toBe(30);
  });
});