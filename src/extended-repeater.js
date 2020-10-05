const CustomError = require("../extensions/custom-error");


module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let res = '';
  let subRes = '';
  if(options.separator===undefined){
    options.separator='+';
  }
  if (options.additionSeparator===undefined){
    options.additionSeparator = '|';
  }
  if (str===null) {
    str = 'null';
  }
  if(options.addition!==undefined){
    subRes = subRepeater(options.addition, options.additionRepeatTimes, options.additionSeparator);
  }
  res = subRepeater(str+subRes, options.repeatTimes, options.separator);

  return res;
};

function subRepeater(str, count, separator){
  let res='';
  while(count>1){
    res+=str+separator;
    count--
  }
  return res+=str;
}


  