class Calculator {
  constructor() {
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
    return this.slot[i - 1];
  }

  get_slot(i) {
    return this.slot[i - 1];
  }
}

module.exports = Calculator;
let instance_of = new Calculator();
