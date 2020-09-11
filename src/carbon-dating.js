const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const bilion = 1000000000000000;


module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(sampleActivity==undefined||typeof sampleActivity!='string'||isNaN(sampleActivity)){
    return false;
  }
  //console.log(sampleActivity);
  let nN=(sampleActivity)/MODERN_ACTIVITY;
  //console.log(nN);
  let k=(0.693*bilion)/HALF_LIFE_PERIOD;
 // console.log(k);
  let ln = (-1)*Math.log(nN);
  //console.log(ln);
  let t = Math.ceil((ln/k)*bilion);
  //console.log(t);
  return t;
};
