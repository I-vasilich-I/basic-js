const CustomError = require("../extensions/custom-error");
let depth;
let flag = 0;
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (flag==0) {
      depth = 1;
      flag = 1;
    }
    if (hasArrays(arr)==1) {
      depth++;
      this.calculateDepth(arr.flat());
    }
    flag = 0;
    return depth;
  }
};

function hasArrays(arr) {
  for (elem of arr) {
    if (Array.isArray(elem)) return 1;
  }
  return 0;
}