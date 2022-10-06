const ftoc = function(temp) {
  c = Math.round(((temp - 32) * (5/9)) * 10) / 10
  return c
};


const ctof = function(temp) {
 f = Math.round((temp * 9/5 + 32) * 10) / 10
 return f
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
