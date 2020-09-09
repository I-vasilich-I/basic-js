const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }

  let dreamTeam='';

  for(elem of members){
    if(typeof elem !='string'){
      continue;
    }

    let temp = firstLetterOfName(elem);
    dreamTeam+=temp==-1 ? '' : temp;
  }
  
  return dreamTeam.split('').sort().join('');
};

function firstLetterOfName(elem){
  elem=elem.replace(/\s/g,''); //get rid of whitespases
  return elem.length>0 ? elem[0].toUpperCase() : -1;
}