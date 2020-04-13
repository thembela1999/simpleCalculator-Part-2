class Calculator {
  constructor() {
    this.regex = /\d+/g;
    this.slot = [];
    this.lastVal = "";
  }

  add() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] == "LAST") {
        sum += this.lastValue();
      } else if (typeof arguments[i] == "string") {
        let num = arguments[i].match(/\d+/g);
        sum += this.get_slot(num);
      } else {
        sum += arguments[i];
      }
    }
    this.lastVal = sum;
    return sum;
  }

  multiply() {
    let product = 1;

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] == "LAST") {
        product *= this.lastValue();
      } else if (typeof arguments[i] == "string") {
        let num = arguments[i].match(/\d+/g);
        product *= this.get_slot(num);
      } else {
        product *= arguments[i];
      }
    }
    this.lastVal = product;
    return product;
  }

  lastValue() {
    return this.lastVal;
  }

  set_slot(i) {
    this.slot.push(this.lastVal);
    return this.slot;
  }

  get_slot(i) {
    return this.slot;
  }
}
let calc = new Calculator();
console.info(calc.add(3, 5));
console.info(calc.multiply(30, 2));

console.info(calc.add(3, 5, 2));

console.info(calc.add(1, 2));
console.info(calc.multiply("LAST", 5));

console.info(calc.add(1, 2));
console.info(calc.add(10, 20));
console.info(calc.add(100, 200));

console.info(calc.add("LAST", 10));
console.info(calc.add("SLOT_1", 5));
console.info(calc.multiply("SLOT_2", 2));

module.exports = {
  Calculator
};
