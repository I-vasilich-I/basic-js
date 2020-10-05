const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const bilion = 1000000000000000;


module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(sampleActivity==undefined||typeof sampleActivity!='string'||isNaN(sampleActivity)
    ||!isFinite(parseFloat(sampleActivity))){
    return false;
  }
  let nN=(sampleActivity)/MODERN_ACTIVITY;
  let k=(0.693*bilion)/HALF_LIFE_PERIOD;
  let ln = (-1)*Math.log(nN);
  let t = Math.ceil((ln/k)*bilion);
  return !isFinite(t) || t < 0 || isNaN(t) ? false : t;
};
