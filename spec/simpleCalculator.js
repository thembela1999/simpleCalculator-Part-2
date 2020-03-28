describe("the calculations", function() {
  beforeEach(function() {
    global.Calc = require("../src/string_calculator_spec.js");
    global.calculator = new Calc();
  });

  describe("A simple calculator that can add multiple numbers", function() {
    it("should add two or more", function() {
      expect(calculator.add(3, 5, 2)).toBe(10);
    });
  });

  describe("Checking simple calculator that multiply multiple numbers", function() {
    it("should be able to multiply two or more numbers", function() {
      expect(calculator.multiply(30, 2)).toEqual(60);
    });
  });

  describe("simple calculator that can return the last result", function() {
    it("should be able to remember and return the last result", function() {
      calculator.multiply(1, 2);

      expect(calculator.Last()).toBe(3);
    });
  });

  describe("simple calculator that can use the last result as a parameter", function() {
    it("should be able to use the last result as a parameter", function() {
      calculator.add(1, 2);

      expect(calculator.multiply("LAST", 5)).toEqual(15); // the value of "LAST" is now 15
      //    expect(calculator.add("LAST", 1,2)) //.toEqual(14)
    });
  });

  describe("simple calculator that can use the slot function result as a parameter", function() {
    it("should be able to use the last result as a parameter", function() {
      calculator.add(1, 2);

      calculator.set_slot(1);
      calculator.multiply(1, 3);
      calculator.set_slot(2);

      expect(calculator.multiply("SLOT_1", 1)).toEqual(3);
      expect(calculator.add("SLOT_2", 3)).toEqual(30);
    });
  });
});
