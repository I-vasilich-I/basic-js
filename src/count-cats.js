const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count=0;
  if(typeof arr=="undefined"&&arr==null&&arr.length==null&&arr.length==0){
    return count;
  } 
  for(let i=0;i<arr.length;i++){
    let ear=arr[i];
    for(let j=0;j<ear.length;j++){
      if(ear[j]=='^^'){
        count++;
      }
    }
  }
  return count;
};
