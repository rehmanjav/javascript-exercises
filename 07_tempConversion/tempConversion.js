const ftoc = function(faranh) {
  return +((faranh - 32) * (5 / 9)).toFixed(1);
};

const ctof = function(celc) {
  return +((celc * (9 / 5)) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
