const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const season = ['winter','spring','summer','fall'];
  if(date===undefined){   
    return 'Unable to determine the time of year!';
  }
  validateDate(date);
  /*
  JSON.stringify(date); works too. JSON notes:
  If the value has a toJSON() method, it's responsible to define what data will be serialized. 
  The instances of Date implement the toJSON() function 
  by returning a string (the same as date.toISOString()). Thus, they are treated as strings.

  date.getUTCDate(); works too as a validator on this particular test. 
  yeah I'm not throwing error by myself, but since there is no such method in fake Date, 
  Error thrown by itself, at least I think so)

  But we are here to study, that's why I'm putting the proper way to handle wrong/fake Date. 
  */
  let month = date.getMonth();
  if(month>=0&&month<=1||month==11){
    return season[0];
  }else if(month>=2&&month<=4){
    return season[1];
  }else if(month>=5&&month<=7){
    return season[2];
  }else if(month>=8&&month<=10){
    return season[3];
  }
}

function validateDate(dateToValidate){
  if(!(Object.prototype.toString.call(dateToValidate) === '[object Date]')){
    throw new Error('Gotcha!');
  }
}
