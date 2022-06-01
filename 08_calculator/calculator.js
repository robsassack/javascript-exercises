const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((prev, cur) =>
    prev + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev, cur) =>
    prev * cur, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let base = 1;
  for (let i=2; i <= a; i++) {
    base = base * i;
  }
  return base;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
