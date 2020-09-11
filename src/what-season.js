const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const season = ['winter','spring','summer','fall'];
  //if(date=undefined){  //intresting... eccedentaly put there = instead of == and have got the check for a very tricky moment.
  if(date===undefined){   
    return 'Unable to determine the time of year!';
  }
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
 
 if(false){
   throw new Error('Gotcha, you\'re not so tricky after all');
  }
}