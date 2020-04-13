const Calculator = require("../src/string_calculator.js");
let calculator = new Calculator();

describe("Simple calc add function", function() {
  it("should add two numbers", function() {
    expect(calc.add(0, 2)).toEqual(2);
    expect(calc.set_slot(1)).toMatch("NaN");

    expect(calc.get_slot(1)).toEqual(1);

    expect(calc.add(3, 5)).toEqual(8);
    expect(calc.get_slot(3)).toEqual(8);

    expect(calc.add(3, 5)).toEqual(8);
    expect(calc.add(3, "LAST")).toEqual(11);
  });

  it('should be able to use "LAST" String as parameter/argument numbers', function() {
    expect(calc.add(3, 5)).toEqual(8);
    expect(calc.add("LAST", 10, 11)).toEqual(29);
  });

  it("should add multiple numbers", function() {
    expect(calc.add(3, 5, 1, 1, 1)).toEqual(11);
  });
});

it("should add multiple numbers using also 'LAST'", function() {
  expect(calc.add("LAST", 10, 11, 31)).toEqual();
  expect(calc.add(3, 5, "LAST")).toEqual(68);
});
describe("Simple calc multiply function", function() {
  it("should multiply multi numbers", () => {
    expect(calc.multiply(3, 5)).toEqual(15);
  });
});
