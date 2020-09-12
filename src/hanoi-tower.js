const CustomError = require("../extensions/custom-error");
let result = {};

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  result.turns=(2**disksNumber)-1;
  result.seconds=Math.floor((result.turns/turnsSpeed)*3600);
  return result;
}