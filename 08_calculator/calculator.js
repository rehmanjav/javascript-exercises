const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach(num => sum += num);
  return sum;
};

const multiply = function(nums) {
  let first = nums[0];
  for (let i = 1; i < nums.length; i++) {
    first *= nums[i];
  }
  return first;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n == 0) {return 1;};
  let factorial = n;
	for (let i = n-1; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
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
