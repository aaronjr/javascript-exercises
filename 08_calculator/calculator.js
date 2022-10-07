const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
  total = 0
  if(array.length == 0){
    return total
  }
  else{
    for(i in array){
      total += parseInt(array[i])
    }
  }
  return total
};

const multiply = function(array) {
  total = array[0]
  array.shift()
  for(i in array){
    total *= parseInt(array[i])
  }
  return total

};

const power = function(a, b) {
  let total = a * a
	for(let i = 1; i < b - 1; i++){
    total *= a 
  }
  return total
};

const factorial = function(n) {
  if (n === 0){
    return 1;
  }
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
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
