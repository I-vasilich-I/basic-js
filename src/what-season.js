const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const season = ['winter','spring','summer','fall'];
  if(date===undefined){   
    return 'Unable to determine the time of year!';
  }
  date.getUTCDate();
  //isArealDate(date);  //leave it there, 'cause why not?
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
/*
function isArealDate(date){
  JSON.stringify(date); //worked too.
  date.toString();  //this one doesn't work, probably because the method toString() was defined on fake Date. 
  date.getUTCDate(); //working
}
*/